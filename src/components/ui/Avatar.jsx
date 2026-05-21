/* src/components/ui/Avatar.jsx
 */
export default function Avatar({ img }) {
  return (
    <>
      <img
        src={img}
        className="flex flex-col items-center justify-center rounded-full w-full h-full aspect-square"
      />
    </>
  );
}
