import React from "react";

export const renderDynamicText = (text: string, styles: any) => {
    const segments = text.split(/(\~\~)/g);
    let opening = false;

    return (
      <>
        {segments.map((segment: string, index: number) => {
          if (segment == '~~' && !opening) {
            opening = true
            return null
          }
          if (segment == '~~' && opening) {
            opening = false
            return null
          }
          if (segments[index - 1] === '~~' && segments[index + 1] === '~~' && opening) {
            return (
              <span key={index} style={styles} className="">
                {segment}
              </span>
            );
          }

          return <React.Fragment key={index}>{segment}</React.Fragment>;
        })}
      </>
    );
  };