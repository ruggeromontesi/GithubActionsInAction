interface ContactProps {
  name: string;
  surname: string;
  phoneNumber?: string;
}

export function Contact({
  name,
  surname,
  phoneNumber = "+390721xxxxx",
}: Readonly<ContactProps>): React.JSX.Element {
  return (
    <section>
      <div>{name}</div>
      <div>{surname}</div>
      <div>{phoneNumber}</div>
    </section>
  );
}
