import {css} from "@emotion/react";

const hasDropCap = ({colors}) => css`
    .has-drop-cap:not(:focus):first-letter{
        float: left;
        font-size: 6rem;
        line-height: .68;
        font-weight: 100;
        margin: .05em .1em 0 0;
        text-transform: uppercase;
        font-style: normal;
        color: ${colors.primary};
        font-weight: bold;
    }
`;

const blocks = (props) =>   css([
    hasDropCap(props)
  ]);

export default blocks;