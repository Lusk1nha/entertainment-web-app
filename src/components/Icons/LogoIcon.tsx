import React from "react";

export function LogoIcon(props: React.SVGProps<SVGSVGElement>) {
   return(
      <div className={props.className}>
         <svg 
            xmlns="http://www.w3.org/2000/svg"
            width="100%" 
            height="100%"
            viewBox="0 0 33 27"      
         >
            <path d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z" fill={props.color || "#FC4747"}/>
         </svg>
      </div>
   );
}