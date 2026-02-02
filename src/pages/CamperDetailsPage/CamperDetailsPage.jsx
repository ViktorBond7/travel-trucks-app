import { Outlet, useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import { useEffect } from "react";
import { fetchCamperById } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectCamper } from "../../redux/campers/campersSlice";
import DetailsCamper from "../../components/DetailsCamper/DetailsCamper";
import css from "./CamperDetailsPage.module.css";

const CamperDetailsPage = () => {
  const idCamper = useParams().id;

  const camper = useSelector(selectCamper);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCamperById(idCamper));
  }, [idCamper]);

  return (
    <Container className={css.box}>
      {camper && <DetailsCamper camper={camper} />}
      <Outlet context={camper} />
    </Container>
  );
};

export default CamperDetailsPage;
