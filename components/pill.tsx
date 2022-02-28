import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faReact } from "@fortawesome/free-brands-svg-icons";

const Pill = ({ language }) => {
  const lanuageMatrix = {
    Python: {
      color: "#3572a5",
    },
    TypeScript: {
      color: "#2c7389",
    },
    Django: {
      color: "#092e20",
    },
    Flask: {
      color: "#505050",
    },
    React: {
      color: "#61DBFB",
      text: "black",
    },
    htmx: {
      color: "#3d72d7",
    },
    AlpineJS: {
      color: "#77c1d2",
    },
  };

  let className = `flex items-center justify-center p-2 mr-2 rounded-2xl w-24 h-8 text-sm text-white`;

  return (
    <div
      className={className}
      style={{ background: lanuageMatrix[language].color }}
    >
      {language}
    </div>
  );

  // if (lanuageMatrix[language].fa) {
  //   const Icon = lanuageMatrix[language].icon;
  //   return (
  //     <div className={className}>
  //       <FontAwesomeIcon icon={Icon} className="h-4" style={{ fill: "#fff" }} />
  //       <p className="pl-2 m-0">{language}</p>
  //     </div>
  //   );
  // }
  //   if (language === "Django") {
  //     const DjangoIcon = require("../public/assets/svg/django.svg");
  //     return (
  //       <div className={className}>
  //         <p className="pl-2 m-0">
  //           <DjangoIcon style={{ height: "20px" }} />
  //         </p>
  //       </div>
  //     );
  //   }
  //   if (language === "TypeScript") {
  //     const TypeScriptIcon = require("../public/assets/svg/typescript.svg");
  //     return (
  //       <div className={className} style={{ width: "125px" }}>
  //         <TypeScriptIcon className="h-4 w-4" style={{ fill: "#fff" }} />
  //         <p className="pl-2 m-0">{language}</p>
  //       </div>
  //     );
  //   }
  //   const Icon = require(`../public/assets/svg/${language
  //     .trim()
  //     .toLowerCase()}.svg`);
  //   return (
  //     <div className={className}>
  //       <Icon className="h-4 w-4" style={{ fill: "#fff" }} />
  //       <p className="pl-2 m-0">{language}</p>
  //     </div>
  //   );
};

export default Pill;
