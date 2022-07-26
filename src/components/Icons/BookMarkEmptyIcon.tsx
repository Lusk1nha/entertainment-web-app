import React from "react";

export function BookmarkEmptyIcon(props: React.SVGProps<SVGSVGElement>) {
   return (
      <svg 
         xmlns="http://www.w3.org/2000/svg"
         {...props}
         width={props.width ?? "100%"}
         height={props.height ?? "100%"}
         viewBox={"0 0 12 14"}
      >
         <path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke={props.color ?? "#FFF"} stroke-width="1.5" fill="none" />
      </svg>
   );
}