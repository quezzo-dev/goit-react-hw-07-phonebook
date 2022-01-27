import s from "./ContactListItem.module.css";

const ContactListItem = ({ name, number, onClick }) => (
  <li className={s.item}>
    {name}: {number}
    <button type="button" className={s.btn} onClick={onClick}>
      Delete
    </button>
  </li>
);


export default ContactListItem;
