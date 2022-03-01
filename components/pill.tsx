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

const Pill = ({ language }) => {
  let className = `flex items-center justify-center p-2 mr-2 rounded-2xl w-24 h-8 text-sm text-white`;

  return (
    <div
      className={className}
      style={{ background: lanuageMatrix[language].color }}
    >
      {language}
    </div>
  );
};

export default Pill;
