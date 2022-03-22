import classes from "./AboutContent.module.css";
import earlyImg from "../../assets/early_img.png";

const AboutContent = () => {
  return (
    <div className={classes["main-container"]}>
      <div className={classes.head}>
        <h2>WHO AM I?</h2>
      </div>
      <div className={classes.early}>
        <div className={classes.container}>
          <div className={classes.headline}>EARLY LIFE</div>
          <div className={classes.copy}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.<br></br>
            <br></br> A small river named Duden flows by their place and
            supplies it with the necessary regelialia. In libero metus, sodales
            eu quam et, sodales rutrum dui. Phasellus vel tincidunt tellus. Duis
            convallis sagittis sodales. <br></br>
            <br></br> Mauris luctus, sem ac facilisis laoreet, diam libero
            rhoncus dolor, nec accumsan dolor est quis ipsum. Maecenas semper
            enim elit.
          </div>
        </div>
      </div>
      <div className={classes["img-container"]}>
        <img src={earlyImg} alt="" className={classes.image} />
      </div>
      <div className={classes.education}>
        <div className={classes.container}>
          <div className={classes.headline}>EDUCATION</div>
          <div className={classes.copy}>
            Vivamus finibus odio in tortor viverra, eget molestie felis
            elementum. Cras ultrices lorem id eleifend iaculis. Vivamus
            tincidunt, ex ut sagittis rutrum, ipsum diam cursus ante, at
            volutpat mi nulla porta tellus.<br></br>
            <br></br> Morbi id dapibus elit. Curabitur suscipit quis risus quis
            sagittis. Aliquam erat volutpat. Nulla scelerisque, est sit amet
            blandit egestas, velit libero ultrices orci, vel sollicitudin quam
            ante a velit. Curabitur in ante vel justo sagittis lacinia. Nulla
            facilisi. Morbi sed tempor dui. Etiam sed porta turpis, volutpat
            fermentum elit. Sed euismod tellus neque, dictum aliquet purus
            sollicitudin eget.<br></br>
            <br></br> Proin dictum lacus sed posuere semper. Etiam porttitor
            tortor sapien, non placerat urna consequat vitae. Pellentesque in
            porttitor urna. Pellentesque leo orci, malesuada vel congue ut,
            hendrerit ut turpis. Aliquam ipsum dui, cursus ac suscipit vel,
            interdum nec est. Sed sit amet sodales lectus. Curabitur efficitur
            vel ex eget imperdiet.
          </div>
        </div>
      </div>
      <div className={classes.career}>
        <div className={classes.container}>
          <div className={classes.headline}>CAREER</div>
          <div className={classes.copy}>
            Vivamus finibus odio in tortor viverra, eget molestie felis
            elementum. Cras ultrices lorem id eleifend iaculis. Vivamus
            tincidunt, ex ut sagittis rutrum, ipsum diam cursus ante, at
            volutpat mi nulla porta tellus.<br></br>
            <br></br> Morbi id dapibus elit. Curabitur suscipit quis risus quis
            sagittis. Aliquam erat volutpat. Nulla scelerisque, est sit amet
            blandit egestas, velit libero ultrices orci, vel sollicitudin quam
            ante a velit. Curabitur in ante vel justo sagittis lacinia. Nulla
            facilisi.<br></br>
            <br></br> Morbi sed tempor dui. Etiam sed porta turpis, volutpat
            fermentum elit. Sed euismod tellus neque, dictum aliquet purus
            sollicitudin eget Pellentesque leo orci, malesuada vel congue ut,
            hendrerit ut turpis. Aliquam ipsum dui, cursus ac suscipit vel,
            interdum nec est. Sed sit amet sodales lectus.<br></br>
            <br></br>Proin dictum lacus sed posuere semper. Etiam porttitor
            tortor sapien, non placerat urna consequat vitae. Pellentesque in
            porttitor urna. Pellentesque leo orci, malesuada vel congue ut,
            hendrerit ut turpis.
          </div>
        </div>
      </div>
      <div className={classes.values}>
        <div className={classes.container}>
          <div className={classes.headline}>VALUES</div>
          <div className={classes.copy}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. <br></br>
            <br></br> Separated they live in Bookmarksgrove right at the coast
            of the Semantics, a large language ocean. A small river named Duden
            flows by their place and supplies it with the necessary regelialia.
            In libero metus, sodales eu quam et, sodales rutrum dui. <br></br>
            <br></br> Phasellus vel tincidunt tellus. Duis convallis sagittis
            sodales. Mauris luctus, sem ac facilisis laoreet, diam libero
            rhoncus dolor, nec accumsan dolor est quis ipsum. Maecenas semper
            enim elit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
