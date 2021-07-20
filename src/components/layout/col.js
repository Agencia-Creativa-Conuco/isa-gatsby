import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import mq from "./mq";

const colSize = size => (parseInt(size)>0 && parseInt(size)<=12 ?(100/12*parseInt(size))+"%": `100%`);

const ColComponent = ({
    size, sizeSM, sizeMD, sizeLG, sizeXL,
    order, orderSM, orderMD, orderLG, orderXL,
    noGutters, noGuttersSM, noGuttersMD, noGuttersLG, noGuttersXL,
    noLGutters, noLGuttersSM, noLGuttersMD, noLGuttersLG, noLGuttersXL,
    noRGutters, noRGuttersSM, noRGuttersMD, noRGuttersLG, noRGuttersXL,
    gutters, guttersSM, guttersMD, guttersLG, guttersXL,
    lGutters, lGuttersSM, lGuttersMD, lGuttersLG, lGuttersXL,
    rGutters, rGuttersSM, rGuttersMD, rGuttersLG, rGuttersXL,
    mxAuto, mxSMAuto, mxMDAuto, mxLGAuto, mxXLAuto,
    mlAuto, mlSMAuto, mlMDAuto, mlLGAuto, mlXLAuto,
    mrAuto, mrSMAuto, mrMDAuto, mrLGAuto, mrXLAuto,
    hidden, hiddenSM, hiddenMD, hiddenLG, hiddenXL,
    visible, visibleSM, visibleMD, visibleLG, visibleXL,
    alignSelf, alignSMSelf, alignMDSelf, alignLGSelf, alignXLSelf,
    alignCenter, alignSMCenter, alignMDCenter, alignLGCenter, alignXLCenter,
    zIndex, zIndexSM, zIndexMD, zIndexLG, zIndexXL, 
    ...props
}) => {

    return <Col {...{
        size, sizeSM, sizeMD, sizeLG, sizeXL,
        order, orderSM, orderMD, orderLG, orderXL,
        noGutters, noGuttersSM, noGuttersMD, noGuttersLG, noGuttersXL,
        noLGutters, noLGuttersSM, noLGuttersMD, noLGuttersLG, noLGuttersXL,
        noRGutters, noRGuttersSM, noRGuttersMD, noRGuttersLG, noRGuttersXL,
        gutters, guttersSM, guttersMD, guttersLG, guttersXL,
        lGutters, lGuttersSM, lGuttersMD, lGuttersLG, lGuttersXL,
        rGutters, rGuttersSM, rGuttersMD, rGuttersLG, rGuttersXL,
        mxAuto, mxSMAuto, mxMDAuto, mxLGAuto, mxXLAuto,
        mlAuto, mlSMAuto, mlMDAuto, mlLGAuto, mlXLAuto,
        mrAuto, mrSMAuto, mrMDAuto, mrLGAuto, mrXLAuto,
        hidden, hiddenSM, hiddenMD, hiddenLG, hiddenXL,
        visible, visibleSM, visibleMD, visibleLG, visibleXL,
        alignSelf, alignSMSelf, alignMDSelf, alignLGSelf, alignXLSelf,
        alignCenter, alignSMCenter, alignMDCenter, alignLGCenter, alignXLCenter,
        zIndex, zIndexSM, zIndexMD, zIndexLG, zIndexXL,
        ...props
    }} />

}

export default ColComponent;

const Col = styled.div`
    ${({
        size, sizeSM, sizeMD, sizeLG, sizeXL,
        order, orderSM, orderMD, orderLG, orderXL,
        noGutters, noGuttersSM, noGuttersMD, noGuttersLG, noGuttersXL,
        noLGutters, noLGuttersSM, noLGuttersMD, noLGuttersLG, noLGuttersXL,
        noRGutters, noRGuttersSM, noRGuttersMD, noRGuttersLG, noRGuttersXL,
        gutters, guttersSM, guttersMD, guttersLG, guttersXL,
        lGutters, lGuttersSM, lGuttersMD, lGuttersLG, lGuttersXL,
        rGutters, rGuttersSM, rGuttersMD, rGuttersLG, rGuttersXL,
        mxAuto, mxSMAuto, mxMDAuto, mxLGAuto, mxXLAuto,
        mlAuto, mlSMAuto, mlMDAuto, mlLGAuto, mlXLAuto,
        mrAuto, mrSMAuto, mrMDAuto, mrLGAuto, mrXLAuto,
        hidden, hiddenSM, hiddenMD, hiddenLG, hiddenXL,
        visible, visibleSM, visibleMD, visibleLG, visibleXL,
        alignSelf, alignSMSelf, alignMDSelf, alignLGSelf, alignXLSelf,
        alignCenter, alignSMCenter, alignMDCenter, alignLGCenter, alignXLCenter,
        zIndex, zIndexSM, zIndexMD, zIndexLG, zIndexXL,
    })=>css`

        ${!size || size === true? css`flex-basis: 0;`: ""}
        ${!size || size === true? css`flex-grow: 1;`: ""}
        ${size === "auto"? css`flex: 0 0 ${size};` : parseInt(size)? css`flex: 0 0 ${colSize(size)};` : "" }
        max-width: ${ parseInt(size) ? colSize(size)+";" : '100%;'}
        width: ${ size === "auto"? size+";" : "100%;"}
        position: relative;
        padding-left: 15px;
        padding-right: 15px;
        ${sizeSM ? css`
            ${mq.sm}{
                ${sizeSM === true? css`flex-basis: 0;`: ""}
                ${ sizeSM === true? css`flex-grow: 1;`: ""}
                ${ sizeSM === "auto"? css`flex: 0 0 ${sizeSM};` : parseInt(sizeSM)? css`flex: 0 0 ${colSize(sizeSM)};` : "" }
                max-width: ${ parseInt(sizeSM) ? colSize(sizeSM)+";" : '100%;'}
                width: ${ sizeSM === "auto"? sizeSM+";" : "100%;"}
            }
        `: ""}
        ${sizeMD ? css`
            ${mq.md}{
                ${sizeMD === true? css`flex-basis: 0;`: ""}
                ${ sizeMD === true? css`flex-grow: 1;`: ""}
                ${ sizeMD === "auto"? css`flex: 0 0 ${sizeMD};` : parseInt(sizeMD)? css`flex: 0 0 ${colSize(sizeMD)};` : "" }
                max-width: ${ parseInt(sizeMD) ? colSize(sizeMD)+";" : '100%;'}
                width: ${ sizeMD === "auto"? sizeMD+";" : "100%;"}
            }
        `: ""}
        ${sizeLG ? css`
            ${mq.lg}{
                ${sizeLG === true? css`flex-basis: 0;`: ""}
                ${ sizeLG === true? css`flex-grow: 1;`: ""}
                ${ sizeLG === "auto"? css`flex: 0 0 ${sizeLG};` : parseInt(sizeLG)? css`flex: 0 0 ${colSize(sizeLG)};` : "" }
                max-width: ${ parseInt(sizeLG) ? colSize(sizeLG)+";" : '100%;'}
                width: ${ sizeLG === "auto"? sizeLG+";" : "100%;"}
            }
        `: ""}
        ${sizeXL ? css`
            ${mq.xl}{
                ${sizeXL === true? css`flex-basis: 0;`: ""}
                ${ sizeXL === true? css`flex-grow: 1;`: ""}
                ${ sizeXL === "auto"? css`flex: 0 0 ${sizeXL};` : parseInt(sizeXL)? css`flex: 0 0 ${colSize(sizeXL)};` : "" }
                max-width: ${ parseInt(sizeXL) ? colSize(sizeXL)+";" : '100%;'}
                width: ${ sizeXL === "auto"? sizeXL+";" : "100%;"}
            }
        `: ""}

        ${order ? css`
            order:${order};
        ` : ""}
        ${orderSM ? css`
            ${mq.sm}{
                order:${orderSM};
            }
        ` : ""}
        ${orderMD ? css`
            ${mq.md}{
                order:${orderMD};
            }
        ` : ""}
        ${orderLG ? css`
            ${mq.lg}{
                order:${orderLG};
            }
        ` : ""}
        ${orderXL ? css`
            ${mq.xl}{
                order:${orderXL};
            }
        ` : ""}

        // Gutters
        ${noGutters ? css`
            padding-left: 0px;
            padding-right: 0px;
        ` : ``}
        ${noGuttersSM ? css`
            ${mq.sm}{
                padding-left: 0px;
                padding-right: 0px;
            }
        ` : ""}
        ${noGuttersMD ? css`
            ${mq.md}{
                padding-left: 0px;
                padding-right: 0px;
            }
        ` : ""}
        ${noGuttersLG ? css`
            ${mq.lg}{
                padding-left: 0px;
                padding-right: 0px;
            }
        ` : ""}
        ${noGuttersXL ? css`
            ${mq.xl}{
                padding-left: 0px;
                padding-right: 0px;
            }
        ` : ""}

        ${gutters ? css`
            padding-left: 15px;
            padding-right: 15px;
        ` : ``}
        ${guttersSM ? css`
            ${mq.sm}{
                padding-left: 15px;
                padding-right: 15px;
            }
        ` : ""}
        ${guttersMD ? css`
            ${mq.md}{
                padding-left: 15px;
                padding-right: 15px;
            }
        ` : ""}
        ${guttersLG ? css`
            ${mq.lg}{
                padding-left: 15px;
                padding-right: 15px;
            }
        ` : ""}
        ${guttersXL ? css`
            ${mq.xl}{
                padding-left: 15px;
                padding-right: 15px;
            }
        ` : ""}

        // Right Gutter
        ${noRGutters ? css`
            padding-right: 0px;
        ` : ``}
        ${noRGuttersSM ? css`
            ${mq.sm}{
                padding-right: 0px;
            }
        ` : ""}
        ${noRGuttersMD ? css`
            ${mq.md}{
                padding-right: 0px;
            }
        ` : ""}
        ${noRGuttersLG ? css`
            ${mq.lg}{
                padding-right: 0px;
            }
        ` : ""}
        ${noRGuttersXL ? css`
            ${mq.xl}{
                padding-right: 0px;
            }
        ` : ""}

        ${rGutters ? css`
            padding-right: 15px;
        ` : ``}
        ${rGuttersSM ? css`
            ${mq.sm}{
                padding-right: 15px;
            }
        ` : ""}
        ${rGuttersMD ? css`
            ${mq.md}{
                padding-right: 15px;
            }
        ` : ""}
        ${rGuttersLG ? css`
            ${mq.lg}{
                padding-right: 15px;
            }
        ` : ""}
        ${rGuttersXL ? css`
            ${mq.xl}{
                padding-right: 15px;
            }
        ` : ""}

        // Left Gutter
        ${noLGutters ? css`
            padding-left: 0px;
        ` : ``}
        ${noLGuttersSM ? css`
            ${mq.sm}{
                padding-left: 0px;
            }
        ` : ""}
        ${noLGuttersMD ? css`
            ${mq.md}{
                padding-left: 0px;
            }
        ` : ""}
        ${noLGuttersLG ? css`
            ${mq.lg}{
                padding-left: 0px;
            }
        ` : ""}
        ${noLGuttersXL ? css`
            ${mq.xl}{
                padding-left: 0px;
            }
        ` : ""}

        ${lGutters ? css`
            padding-left: 15px;
        ` : ``}
        ${lGuttersSM ? css`
            ${mq.sm}{
                padding-left: 15px;
            }
        ` : ""}
        ${lGuttersMD ? css`
            ${mq.md}{
                padding-left: 15px;
            }
        ` : ""}
        ${lGuttersLG ? css`
            ${mq.lg}{
                padding-left: 15px;
            }
        ` : ""}
        ${lGuttersXL ? css`
            ${mq.xl}{
                padding-left: 15px;
            }
        ` : ""}

        // Alingment
        ${mxAuto ? css`
            margin-left: auto;
            margin-right: auto;
        `:""}
        ${mxSMAuto ? css`
            ${mq.sm}{
                margin-left: auto;
                margin-right: auto;
            }
        `:""}
        ${mxMDAuto ? css`
            ${mq.md}{
                margin-left: auto;
                margin-right: auto;
            }
        `:""}
        ${mxLGAuto ? css`
            ${mq.lg}{
                margin-left: auto;
                margin-right: auto;
            }
        `:""}
        ${mxXLAuto ? css`
            ${mq.xl}{
                margin-left: auto;
                margin-right: auto;
            }
        `:""}

        ${mlAuto ? css`
            margin: initial;
            margin-left: auto;
        `:""}
        ${mlSMAuto ? css`
            ${mq.sm}{
                margin: initial;
                margin-left: auto;
            }
        `:""}
        ${mlMDAuto ? css`
            ${mq.md}{
                margin: initial;
                margin-left: auto;
            }
        `:""}
        ${mlLGAuto ? css`
            ${mq.lg}{
                margin: initial;
                margin-left: auto;
            }
        `:""}
        ${mlXLAuto ? css`
            ${mq.xl}{
                margin: initial;
                margin-left: auto;
            }
        `:""}

        ${mrAuto ? css`
            margin: initial;
            margin-right: auto;
        `:""}
        ${mrSMAuto ? css`
            ${mq.sm}{
                margin: initial;
                margin-right: auto;
            }
        `:""}
        ${mrMDAuto ? css`
            ${mq.md}{
                margin: initial;
                margin-right: auto;
            }
        `:""}
        ${mrLGAuto ? css`
            ${mq.lg}{
                margin: initial;
                margin-right: auto;
            }
        `:""}
        ${mrXLAuto ? css`
            ${mq.xl}{
                margin: initial;
                margin-right: auto;
            }
        `:""}

        // ${hidden ? css`
        //     display: none;
        // `:""}
        ${hiddenSM ? css`
            ${mq.sm}{
                display: none;
            }
        `:""}
        ${hiddenMD ? css`
            ${mq.md}{
                display: none;
            }
        `:""}
        ${hiddenLG ? css`
            ${mq.lg}{
                display: none;
            }
        `:""}
        ${hiddenXL ? css`
            ${mq.xl}{
                display: none;
            }
        `:""}

        ${visible ? css`
            display: block;
        `:""}
        ${visibleSM ? css`
            ${mq.sm}{
                display: block;
            }
        `:""}
        ${visibleMD ? css`
            ${mq.md}{
                display: block;
            }
        `:""}
        ${visibleLG ? css`
            ${mq.lg}{
                display: block;
            }
        `:""}
        ${visibleXL ? css`
            ${mq.xl}{
                display: block;
            }
        `:""}

        ${alignSelf? css`
            align-Self: ${alignSelf};
        `: ""}
        ${alignSMSelf? css`
            ${mq.sm}{
            align-Self: ${alignSMSelf};
            }
        `: ""}
        ${alignMDSelf? css`
            ${mq.md}{
            align-Self: ${alignMDSelf};
            }
        `: ""}
        ${alignLGSelf? css`
            ${mq.lg}{
            align-Self: ${alignLGSelf};
            }
        `: ""}
        ${alignXLSelf? css`
            ${mq.xl}{
            align-Self: ${alignXLSelf};
            }
        `: ""}

        ${zIndex ? css`
            z-index:${zIndex};
        ` : ""}
        ${zIndexSM ? css`
            ${mq.sm}{
                z-index:${zIndexSM};
            }
        ` : ""}
        ${zIndexMD ? css`
            ${mq.md}{
                z-index:${zIndexMD};
            }
        ` : ""}
        ${zIndexLG ? css`
            ${mq.lg}{
                z-index:${zIndexLG};
            }
        ` : ""}
        ${zIndexXL ? css`
            ${mq.xl}{
                z-index:${zIndexXL};
            }
        ` : ""}

        ${alignCenter? css`
            display: flex;
            align-items: center;`
            : ""
        }
        ${alignSMCenter? css`
            ${mq.sm}{
                display: flex;
                align-items: center;
            }
        `: ""}
        ${alignMDCenter? css`
            ${mq.md}{
                display: flex;
                align-items: center;
            }
        `: ""}
        ${alignLGCenter? css`
            ${mq.lg}{
                display: flex;
                align-items: center;
            }
        `: ""}
        ${alignXLCenter? css`
            ${mq.xl}{
                display: flex;
                align-items: center;
            }
        `: ""}
        
    `}
`