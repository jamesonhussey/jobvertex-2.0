import { Link } from "react-router-dom";
import ApplyForm from '../../components/ApplyForm/ApplyForm'


export default function JuniorWebDevApplicationPage({user, setUser}) {
  return (
    <>
      <h1>Application</h1>
      
      <ApplyForm setUser={setUser}/>
    </>
  );
}