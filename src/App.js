import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
// import { findDOMNode } from "react-dom";

// import "./css/normalize.css";
import "./app.css";
import Home from "./component/Home/home";
import RentalHome from "./component/Rental/home";
import RentalResult from "./component/Rental/result";
import CaseList from "./component/Case/caselist";
import CaseInfo from "./component/Case/caseinfo";
import VenueDetail from "./component/Rental/Detail";
import Header from "./component/header";
import Footer from "./component/footer";
import FatFooter from "./component/Home/fatfooter";
import ScrollToTop from "./component/scrolltotop";
import StepOne from "./component/Apply/one";
import StepTwo from "./component/Apply/two";
import StepThree from "./component/Apply/three";
import StepFour from "./component/Apply/four";

import rentalData from "./data/rental";
import caseData from "./data/case";
import sortData from "./data/sort";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rentalData: rentalData,
      caseData: caseData,
      sortData: sortData,
      rentalResult: rentalData,
      search: {
        keyword: "",
        date: { do: false, value: [] },
      },
      filter: {
        dodistrict: false,
        district: [
          { checked: false, name: "台北市不限" },
          { checked: false, name: "中正區" },
          { checked: false, name: "大同區" },
          { checked: false, name: "中山區" },
          { checked: false, name: "松山區" },
          { checked: false, name: "大安區" },
          { checked: false, name: "萬華區" },
          { checked: false, name: "信義區" },
          { checked: false, name: "士林區" },
          { checked: false, name: "松山區" },
          { checked: false, name: "內湖區" },
          { checked: false, name: "文山區" },
        ],
        dotype: false,
        type: [
          { checked: false, name: "類型不限" },
          { checked: false, name: "戶外" },
          { checked: false, name: "室內" },
          { checked: false, name: "運動場館" },
          { checked: false, name: "藝文場館" },
          { checked: false, name: "廣場" },
          { checked: false, name: "公園" },
          { checked: false, name: "教室" },
        ],
        donumber: false,
        number: [
          { checked: false, min: 0, max: 30 },
          { checked: false, min: 30, max: 60 },
          { checked: false, min: 60, max: 100 },
          { checked: false, min: 100, max: 200 },
          { checked: false, min: 200, max: 500 },
          { checked: false, min: 500, max: 1000 },
          { checked: false, min: 1000, max: 10000 },
        ],
        docost: false,
        cost: [
          { checked: false, min: 0, max: 0 },
          { checked: false, min: 0, max: 500 },
          { checked: false, min: 500, max: 1000 },
          { checked: false, min: 1000, max: 3000 },
          { checked: false, min: 3000, max: 5000 },
          { checked: false, min: 5000, max: 10000 },
          { checked: false, min: 10000, max: 100000 },
        ],
      },
    };

    this.setRentalSearch = this.setRentalSearch.bind(this);
    this.setRentalFilter_DT = this.setRentalFilter_DT.bind(this);
    this.setRentalFilter_N = this.setRentalFilter_N.bind(this);
    this.setRentalFilter_C = this.setRentalFilter_C.bind(this);
    this.setRentalSearchDate = this.setRentalSearchDate.bind(this);
    this.setRentalResult = this.setRentalResult.bind(this);
  }

  render() {
    return (
      <HashRouter className="App">
        <ScrollToTop />
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <div>
                <Home sortData={this.state.sortData} />
                <FatFooter sortData={this.state.sortData} />
              </div>
            )}
          />
          <Route
            path="/rental"
            component={() => (
              <RentalHome
                filter={this.state.filter}
                setRentalSearch={this.setRentalSearch}
              />
            )}
          />
          <Route
            path="/rentallist"
            component={() => (
              <RentalResult
                filter={this.state.filter}
                search={this.state.search}
                result={this.state.rentalResult}
                setRentalSearch={this.setRentalSearch}
              />
            )}
          />
          <Route
            path="/caselist/:listtype/:listname"
            component={(props) => (
              <CaseList
                {...props}
                sortData={this.state.sortData}
                caseData={this.state.caseData}
              />
            )}
          />
          <Route
            path="/caseinfo/:caseindex"
            component={(props) => (
              <CaseInfo
                item={this.state.caseData[props.match.params.caseindex]}
              />
            )}
          />
          <Route
            path="/venuedetail/:venueindex"
            component={(props) => (
              <VenueDetail
                item={this.state.rentalData[props.match.params.venueindex]}
              />
            )}
          />
          <Route path="/apply/step1" component={(props) => <StepOne />} />
          <Route path="/apply/step2" component={(props) => <StepTwo />} />
          <Route path="/apply/step3" component={(props) => <StepThree />} />
          <Route path="/apply/step4" component={(props) => <StepFour />} />
        </Switch>
        <Footer />
      </HashRouter>
    );
  }

  setMaskWork() {
    this.setState({
      mask: !this.state.mask,
    });
  }

  setRentalResult(result) {
    this.setState({
      rentalResult: result,
    });
  }

  setRentalSearch(search, filter) {
    let result_s = this.setRentalSearchDate(this.state.rentalData, search);
    let result = this.setRentalFilter_DT(result_s, filter);
    if (filter.donumber) result = this.setRentalFilter_N(result, filter);
    if (filter.docost) result = this.setRentalFilter_C(result, filter);
    this.setRentalResult(result);
  }

  setRentalSearchDate(data, search) {
    let result = [];
    if (search !== undefined) {
      if (search.date.do) {
        this.setState({
          search: search,
        });
        result = data;
      } else {
        result = data;
      }
    }
    return result;
  }

  setRentalFilter_DT(data, filter) {
    if (filter !== undefined) {
      const f = Object.assign({}, this.state.filter, filter);
      this.setState({
        filter: f,
      });
    }

    let result = [];
    let d = true,
      t = true;
    data.forEach((item) => {
      if (filter.dodistrict) {
        if (filter.district.every((ditem) => !ditem.checked)) {
          d = true;
        } else {
          d = filter.district.some(
            (ditem) => ditem.checked && ditem.name === item.district
          );
        }
      }
      if (filter.dotype) {
        if (filter.type.every((titem) => !titem.checked)) {
          t = true;
        } else {
          t = item.type.some((name) =>
            filter.type.some((titem) => titem.checked && titem.name === name)
          );
        }
      }
      if (d && t) result.push(item);
    });
    return result;
  }

  setRentalFilter_N(data, filter) {
    if (filter !== undefined) {
      const f = Object.assign({}, this.state.filter, filter);
      this.setState({
        filter: f,
      });
    }

    let result = [];
    let n = true;
    data.forEach((item) => {
      if (filter.number.every((nitem) => !nitem.checked)) {
        n = true;
      } else {
        n = filter.number.some(
          (nitem) =>
            nitem.checked &&
            item.number >= nitem.min &&
            item.number <= nitem.max
        );
      }
      if (n) result.push(item);
    });
    return result;
  }

  setRentalFilter_C(data, filter) {
    if (filter !== undefined) {
      const f = Object.assign({}, this.state.filter, filter);
      this.setState({
        filter: f,
      });
    }

    let result = [];
    let c = true;
    data.forEach((item) => {
      if (filter.cost.every((citem) => !citem.checked)) {
        c = true;
      } else {
        c = filter.cost.some(
          (citem) =>
            citem.checked && item.cost >= citem.min && item.cost <= citem.max
        );
      }
      if (c) result.push(item);
    });
    return result;
  }
}

export default App;

// setRentalFilter(filter) {
//   if (filter !== {}) {
//     this.setState({
//       filter: filter,
//     });
//   }

//   let result = [];
//   let d, t, n, c;
//   this.state.rentalData.forEach((item) => {
//     if (filter.district.every((ditem) => !ditem.checked)) {
//       d = true;
//     } else {
//       d = filter.district.some(
//         (ditem) => ditem.checked && ditem.name === item.district
//       );
//     }
//     if (filter.type.every((titem) => !titem.checked)) {
//       t = true;
//     } else {
//       t = item.type.some((name) =>
//         filter.type.some((titem) => titem.checked && titem.name === name)
//       );
//     }
//     if (filter.number.every((nitem) => !nitem.checked)) {
//       n = true;
//     } else {
//       n = filter.number.some(
//         (nitem) =>
//           nitem.checked &&
//           item.number >= nitem.min &&
//           item.number <= nitem.max
//       );
//     }
//     if (filter.cost.every((citem) => !citem.checked)) {
//       c = true;
//     } else {
//       c = filter.cost.some(
//         (citem) =>
//           citem.checked && item.cost >= citem.min && item.cost <= citem.max
//       );
//     }
//     if (d && t && n && c) result.push(item);
//   });
// }
//   let d, t, o;
//   d = this.state.filter.district;
//   d.forEach((ditem) => {
//     ditem.checked = false;
//   });
//   t = this.state.filter.type;
//   t.forEach((titem) => {
//     titem.checked = false;
//   });
//   if (search.district.do && search.type.do) {
//     d[search.district.index].checked = true;
//     t[search.type.index].checked = true;
//   } else if (search.district.do) {
//     d[search.district.index].checked = true;
//   } else if (search.type.do) {
//     t[search.type.index].checked = true;
//   }

//   o = Object.assign({}, this.state.filter, {
//     district: d,
//     type: t,
//   });

//   this.setState({
//     filter: o,
//   });

//   let result = [];
//   if (search.district.do || search.type.do) {
//     this.state.rentalData.forEach((item) => {
//       let d = item.district === search.district.name || !search.district.do;
//       let t = item.type.includes(search.type.name) || !search.type.do;
//       if (d && t) result.push(item);
//     });
//   } else result = this.state.rentalData;
//   this.setRentalResult(result);
// }