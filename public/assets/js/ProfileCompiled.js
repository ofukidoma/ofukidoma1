"use strict";

const Profile = () => {
  const member = JSON.parse(localStorage.getItem("member"));
  return /*#__PURE__*/ React.createElement(
    "div",
    null,
    /*#__PURE__*/ React.createElement(
      "section",
      {
        className: "u-clearfix u-section-2",
        id: "sec-518a",
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className:
            "u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1",
        },
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className: "u-layout",
          },
          /*#__PURE__*/ React.createElement(
            "div",
            {
              className: "u-layout-row",
            },
            /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "u-size-21",
              },
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  className: "u-layout-row",
                },
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    className:
                      "u-align-center u-black u-container-style u-layout-cell u-size-60 u-layout-cell-1",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      className:
                        "u-container-layout u-valign-top u-container-layout-1",
                    },
                    /*#__PURE__*/ React.createElement("div", {
                      alt: "",
                      style: {
                        backgroundImage: `url('${member.img}')`,
                      },
                      className: "u-image u-image-circle u-image-1",
                      "data-image-width": "1071",
                      "data-image-height": "1500",
                    }),
                    /*#__PURE__*/ React.createElement(
                      "h3",
                      {
                        className: "u-text u-text-default u-text-1",
                      },
                      member.name
                    ),
                    /*#__PURE__*/ React.createElement(
                      "h6",
                      {
                        className: "u-text u-text-default u-text-2",
                      },
                      member.position
                    )
                  )
                )
              )
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "u-size-39",
              },
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  className: "u-layout-col",
                },
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    className:
                      "u-container-style u-layout-cell u-size-30 u-layout-cell-2",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      className:
                        "u-container-layout u-valign-middle u-container-layout-2",
                    },
                    /*#__PURE__*/ React.createElement(
                      "h5",
                      {
                        className: "u-text u-text-default u-text-3",
                      },
                      "Portfolio"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "p",
                      {
                        className:
                          "u-custom-font u-heading-font u-text u-text-default u-text-4",
                      },
                      member.portfolio
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    className:
                      "u-container-style u-layout-cell u-palette-3-light-2 u-size-30 u-layout-cell-3",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      className:
                        "u-container-layout u-valign-middle u-container-layout-3",
                    },
                    /*#__PURE__*/ React.createElement(
                      "h5",
                      {
                        className: "u-text u-text-default u-text-5",
                      },
                      "About"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "p",
                      {
                        className:
                          "u-custom-font u-heading-font u-text u-text-default u-text-6",
                      },
                      member.about
                    )
                  )
                )
              )
            )
          )
        )
      )
    ),
    /*#__PURE__*/ React.createElement(
      "section",
      {
        className: "u-backlink u-clearfix u-grey-80",
      },
      /*#__PURE__*/ React.createElement(
        "a",
        {
          className: "u-link",
          href: "#",
          target: "_blank",
        },
        /*#__PURE__*/ React.createElement("span", null, member.phone)
      ),
      /*#__PURE__*/ React.createElement(
        "p",
        {
          className: "u-text",
        },
        /*#__PURE__*/ React.createElement("span", null, member.email)
      ),
      /*#__PURE__*/ React.createElement(
        "a",
        {
          className: "u-link",
          href: "#",
          target: "_blank",
        },
        /*#__PURE__*/ React.createElement("span", null, member.address)
      ),
      "."
    )
  );
};

ReactDOM.render(
  /*#__PURE__*/ React.createElement(Profile, null),
  document.getElementById("profile")
);
