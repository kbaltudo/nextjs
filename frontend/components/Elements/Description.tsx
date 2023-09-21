import React from "react";
const elements = {
    div: 'div',
    section: 'section'
};

function Description({ type, children, ...props }) {
    let newclass = '';
    if(!children){
        return;
    }
    if (props.replaceclass) {
        newclass = props.className;
    } else {
        newclass = 'body-copy mb-3 ' + (props.className ? props.className : '');
    }
    const newprops = { ...props, dangerouslySetInnerHTML: { __html: children }, className:newclass }
    return React.createElement(
        elements[type] || elements.div,
        newprops
    );
}

Description.defaultProps = {
    type: 'div'
};

export default Description;