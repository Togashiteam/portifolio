interface ItemMenuInterface {
  hidden?: boolean;
  // type: typeItems;
}

export default function ItemMenu({ hidden }: ItemMenuInterface) {
  return (
    <>
      {hidden && <h3> Hidden </h3>}
      <div>a</div>
    </>
  );
}
