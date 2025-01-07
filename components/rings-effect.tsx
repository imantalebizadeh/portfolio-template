export default function RingsEffect() {
  return (
    <>
      {Array.from({ length: 4 }).map((_, index) => {
        const size = 620 + index * 200;

        return (
          <div
            key={index}
            className="glob-ring"
            style={{ width: size, height: size }}
          />
        );
      })}
    </>
  );
}
