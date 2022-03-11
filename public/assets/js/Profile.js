const Profile = () => {
  const member = JSON.parse(localStorage.getItem("member"));

  console.log(member);

  return (
    <div>
      <section className="u-clearfix u-section-2" id="sec-518a">
        <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
          <div className="u-layout">
            <div className="u-layout-row">
              <div className="u-size-21">
                <div className="u-layout-row">
                  <div className="u-align-center u-black u-container-style u-layout-cell u-size-60 u-layout-cell-1">
                    <div className="u-container-layout u-valign-top u-container-layout-1">
                      <div
                        alt=""
                        style={{ backgroundImage: `url('${member.img}')` }}
                        className="u-image u-image-circle u-image-1"
                        data-image-width="1071"
                        data-image-height="1500"
                      ></div>

                      <h3 className="u-text u-text-default u-text-1">
                        {member.name}
                      </h3>
                      <h6 className="u-text u-text-default u-text-2">
                        {member.position}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="u-size-39">
                <div className="u-layout-col">
                  <div className="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                    <div className="u-container-layout u-valign-middle u-container-layout-2">
                      <h5 className="u-text u-text-default u-text-3">
                        Portfolio
                      </h5>
                      <p className="u-custom-font u-heading-font u-text u-text-default u-text-4">
                        {member.portfolio}
                      </p>
                    </div>
                  </div>
                  <div className="u-container-style u-layout-cell u-palette-3-light-2 u-size-30 u-layout-cell-3">
                    <div className="u-container-layout u-valign-middle u-container-layout-3">
                      <h5 className="u-text u-text-default u-text-5">About</h5>
                      <p className="u-custom-font u-heading-font u-text u-text-default u-text-6">
                        {member.about}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="u-backlink u-clearfix u-grey-80">
        <a class="u-link" href="#" target="_blank">
          <span>{member.phone}</span>
        </a>
        <p></p>
        <div>
          <p class="u-text">{member.email}</p>
        </div>
        <a class="u-link" href="#" target="_blank">
          <span>{member.address}</span>
        </a>100
        .
      </section>
    </div>
  );
};

ReactDOM.render(<Profile />, document.getElementById("profile"));
