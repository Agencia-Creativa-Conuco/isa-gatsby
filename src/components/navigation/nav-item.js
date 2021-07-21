import React, {useState, useEffect, useRef} from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import ResizeObserver from 'resize-observer-polyfill'
import {useSpring, animated, a} from "@react-spring/web";
import Link from "../link";
import NavList from "./nav-list";
import {LeftArrowMenuIcon} from "../icons";
import colors from "../styles/colors";

///////////////////////////////////////////////////
export function usePrevious(value) {
    const ref = useRef()
    useEffect(() => void (ref.current = value), [value])
    return ref.current
  }
  
  export function useMeasure() {
    const ref = useRef()
    const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 })
    const [ro] = useState(() => new ResizeObserver(([entry]) => set(entry.contentRect)))
    useEffect(() => {
      if (ref.current) ro.observe(ref.current)
      return () => ro.disconnect()
    }, [])
    return [{ ref }, bounds]
  }
  //////////////////////////////////////////////////////

const NavItem = ({
    state, libraries, actions,
    item, isMain=false, defaultOpen = false,
    color="#FFFFFF", bg="#75C15133", bgCurrent="#FFE50033", borderColor="#FFE500", borderAll= false,
    fontWeight="normal", fontWeightAll=false, expandColor="inherit",
    ...props
}) => {

  
    const {label, url, children=[]} = item;
    
    const hasChildren = children.length >0;
    const isCurrentPage = false;
    const isLink = url != "#";
    
    const [isOpen, setOpen] = useState(defaultOpen)
    const previous = usePrevious(isOpen)
    const [bind, { height: viewHeight }] = useMeasure()
    const { height, opacity, transform } = useSpring({
      from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
      to: { height: isOpen ? viewHeight : 0, opacity: isOpen ? 1 : 0, transform: `translate3d(${isOpen ? 0 : 20}px,0,0)` }
    })
  
    return (
    <Item 
        {...{
            isMain, hasChildren, colors, isCurrentPage,
            color, bg, bgCurrent, borderColor : borderAll? borderColor : 'initial',
            ...props
        }}
        onClick={(e) => {
            e.stopPropagation();
            setOpen(hasChildren && !isLink?!isOpen:false);
        }}
    >
        {
            hasChildren?(
                <Expand 
                    {...{isOpen}}
                    onClick={(e) => {e.stopPropagation(); setOpen(!isOpen)}}
                    color={expandColor}
                >
                    <LeftArrowMenuIcon />
                </Expand>
            ):null
        }
        {/* If link url is the current page, add `aria-current` for a11y */}
        {
            isLink?(
                <ItemLink
                    to={url}
                    aria-current={isCurrentPage ? "page" : undefined}
                    {...{isMain, hasChildren, colors}}
                    fontWeight={fontWeight}
                    fontWeightAll={fontWeightAll}
                >
                    {label}
                </ItemLink>
            ):(
                <ItemLabel
                    aria-current={isCurrentPage ? "page" : undefined}
                    {...{isMain, hasChildren, colors}}
                    fontWeight={fontWeight}
                    fontWeightAll={fontWeightAll}
                >
                    {label}
                </ItemLabel>
            )
        }
        
        <AListWrapper style={{ opacity, height: isOpen && previous === isOpen ? 'auto' : height }}>
            <AList style={{ transform }} {...bind}>
            {hasChildren? (
                <NavList 
                    items={children}
                    itemColor={color}
                    itemBg={bg}
                    itemBgCurrent={bgCurrent}
                    itemBorderColor={borderColor}
                    itemBorderAll
                    itemFontWeight={fontWeightAll?fontWeight:"initial"}
                    itemFontWeightAll={fontWeightAll}
                    itemExpandColor={expandColor}
                />
            ): null}
            </AList>
        </AListWrapper>

      </Item>
    );
}

export default NavItem;

  
const Item = styled.li`
    ${({
        isMain, hasChildren, isCurrentPage,
        color, bg, bgCurrent, borderColor
    })=>css`
        list-style: none;
        margin: 0.2rem 0;
        color: ${color};
        position: relative;
        cursor: pointer;
        border-left: 0.1rem solid ${borderColor};
        ${isCurrentPage?css`background-color: ${bgCurrent};`:css`background-color: ${bg};`}
    `}
`;

const Expand = styled.div`
    ${({isOpen, color})=>css`
        position: absolute;
        top: 0;
        right: 0;
        width: 3.9rem;
        height: 4rem;
        padding: .8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${color};
        cursor: pointer;
        transition: 0.3s transform ease-in-out;
        ${isOpen?`
            transform: rotate(-90deg);
        `:``}
    `}
`;

const itemTextStyles = ({isMain, hasChildren, fontWeight})=>css`
    display: block;
    line-height: 1.2;
    text-decoration: none;
    color: inherit;
    padding: 1rem 1.5rem;
    padding-right: 4rem;
    font-weight: ${fontWeight};
    &:hover{
        text-decoration: underline;
    }
    // &[aria-current="page"] {
    //     text-decoration: underline;
    // }
`;

const ItemLink = styled(Link)`
    ${itemTextStyles}
`;

const ItemLabel = styled.span`
    ${itemTextStyles}
`;

const AListWrapper = styled(animated.div)`
    overflow: hidden;
`;

const AList = styled(animated.div)`
`;