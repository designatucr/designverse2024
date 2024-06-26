import { COLORS, SIZES } from "@/data/Button";

const Button = ({ onClick, text, loading, color, size }) => {
  return (
    <button
      disabled={loading}
      data-cy={`${text}-button`}
      className={`${loading ? COLORS["gray"].bg : COLORS[color].bg} ${
        loading ? COLORS["gray"].text : COLORS[color].text
      } ${SIZES[size]} ${
        COLORS[color].border
      } py-1 hover:opacity-50 font-bold font-workSans px-10 rounded mt-3`}
      onClick={onClick}
    >
      {loading ? "Loading..." : text}
    </button>
  );
};

export default Button;
