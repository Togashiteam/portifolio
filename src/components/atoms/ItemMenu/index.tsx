enum typeItems {
  link,
  buttun,
}

interface ItemMenuInterface {
  title?: string;
  type: typeItems;
}

export default function ItemMenu({ title }: ItemMenuInterface) {
  return (
    <>
      {title ? <h3>{title}</h3> : null}
      <div>a</div>
    </>
  );
}
