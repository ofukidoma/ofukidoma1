"use strict";

const Team = () => {
  const [teamMembers2, setTeamMembers2] = React.useState([]);
  const [teamMember, setTeamMember] = React.useState({}); // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  React.useEffect(() => {
    var teamMembers = [];
    db.collection("TEAM")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var member = doc.data();
          member.id = doc.id;
          teamMembers.push(member);
        });
        var sortedTeamMembers = teamMembers.sort(function (a, b) {
          return a.id - b.id;
        });
        setTeamMembers2(sortedTeamMembers);
      });
  }, []);

  var openProfile = (member) => {
    const myMember = JSON.stringify(member);
    localStorage.setItem("member", myMember);
    window.location.assign("./profile2.html");
  };

  return teamMembers2.map((member) =>
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "col-12 col-md-6",
        key: member.id,
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "card border-0 shadow-lg pt-5 my-5 position-relative",
        },
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className: "card-body p-4 conts",
          },
          /*#__PURE__*/ React.createElement(
            "div",
            {
              className: "member-profile position-absolute w-100 text-center",
            },
            /*#__PURE__*/ React.createElement("img", {
              className: "rounded-circle mx-auto d-inline-block shadow-sm",
              src: member.img,
              alt: "",
            })
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              className: "card-text pt-1",
            },
            /*#__PURE__*/ React.createElement(
              "h5",
              {
                className:
                  "member-name mb-0 text-center text-primary font-weight-bold",
              },
              member.name
            ),
            /*#__PURE__*/ React.createElement(
              "p",
              {
                className: "justify-text",
              },
              member.portfolio
            )
          )
        ),
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className: "card-footer theme-bg-primary border-0 text-center",
          },
          /*#__PURE__*/ React.createElement(
            "ul",
            {
              className: "social-list list-inline mb-0 mx-auto",
            },
            /*#__PURE__*/ React.createElement(
              "li",
              {
                className: "list-inline-item",
              },
              /*#__PURE__*/ React.createElement(
                "a",
                {
                  className: "text-dark",
                  href: "#",
                },
                /*#__PURE__*/ React.createElement(
                  "svg",
                  {
                    className: "svg-inline--fa fa-linkedin-in fa-w-14 fa-fw",
                    "aria-hidden": "true",
                    focusable: "false",
                    "data-prefix": "fab",
                    "data-icon": "linkedin-in",
                    role: "img",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 448 512",
                    "data-fa-i2svg": "",
                  },
                  /*#__PURE__*/ React.createElement("path", {
                    fill: "currentColor",
                    d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
                  })
                )
              )
            ),
            /*#__PURE__*/ React.createElement(
              "li",
              {
                className: "list-inline-item",
              },
              /*#__PURE__*/ React.createElement(
                "a",
                {
                  className: "text-dark",
                  href: "#",
                },
                /*#__PURE__*/ React.createElement(
                  "svg",
                  {
                    className: "svg-inline--fa fa-twitter fa-w-16 fa-fw",
                    "aria-hidden": "true",
                    focusable: "false",
                    "data-prefix": "fab",
                    "data-icon": "twitter",
                    role: "img",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 512 512",
                    "data-fa-i2svg": "",
                  },
                  /*#__PURE__*/ React.createElement("path", {
                    fill: "currentColor",
                    d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
                  })
                )
              )
            ),
            /*#__PURE__*/ React.createElement(
              "li",
              {
                className: "list-inline-item",
              },
              /*#__PURE__*/ React.createElement(
                "a",
                {
                  className: "text-dark",
                  href: "#",
                },
                /*#__PURE__*/ React.createElement(
                  "svg",
                  {
                    className: "svg-inline--fa fa-medium fa-w-14 fa-fw",
                    "aria-hidden": "true",
                    focusable: "false",
                    "data-prefix": "fab",
                    "data-icon": "medium",
                    role: "img",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 448 512",
                    "data-fa-i2svg": "",
                  },
                  /*#__PURE__*/ React.createElement("path", {
                    fill: "currentColor",
                    d: "M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z",
                  })
                )
              )
            )
          )
        ),
        /*#__PURE__*/ React.createElement(
          "button",
          {
            member: member,
            onClick: () => openProfile(member),
            type: "button",
            className: "btn btn-primary",
            "data-toggle": "modal",
            "data-target": "#exampleModalLong",
          },
          "View More"
        )
      )
    )
  );
};

ReactDOM.render(
  /*#__PURE__*/ React.createElement(Team, null),
  document.getElementById("membership")
);
