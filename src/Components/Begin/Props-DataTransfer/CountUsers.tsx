import { UserProps } from "../Grid_Tables";
interface NAme {
  users: UserProps[];
}
const CountUsers = ({ users }: NAme) => {
  return (
    <div>
      <h2>Number of users is {users.length}</h2>
    </div>
  );
};

export default CountUsers;
