import EditForm from "../components/EditForm";
import Modal from "../components/Modal";
import SinglePage from "../components/SinglePage";
import { useParams } from "react-router-dom";

export default function Details() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <SinglePage id={id} />
      <EditForm id={id} />
      <Modal id={id} />
    </>
  );
}
