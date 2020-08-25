import React from "react";
import { withRouter } from "react-router-dom";

import Button from "../../button";
import Calender from "../../calender";

import search from "../../../assets/images/icon/search.svg";
import start from "../../../assets/images/icon/startdate.png";
import end from "../../../assets/images/icon/enddate.png";
import down from "../../../assets/images/icon/dropdown.png";
import position from "../../../assets/images/icon/position.png";
import type from "../../../assets/images/icon/type.png";

class RentalHomeSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showdropdown: [true, false, false],
      search: {
        keyword: "",
        district: "選擇行政區",
        type: "選擇類型",
        dateStart: "選擇日期",
        dateEnd: "選擇日期",
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDropdownShow = this.handleDropdownShow.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      search: Object.assign({}, this.state.search, {
        [name]: target.value,
      }),
    });
  }

  handleSubmit(event) {
    let d = this.state.search.district !== "";
    let t = this.state.search.type !== "";
    let i, j, s;
    if (d) {
      switch (this.state.search.district) {
        case "中正區":
          i = 0;
          break;
        case "大同區":
          i = 1;
          break;
        case "中山區":
          i = 2;
          break;
        case "松山區":
          i = 3;
          break;
        case "大安區":
          i = 4;
          break;
        case "萬華區":
          i = 5;
          break;
        case "信義區":
          i = 6;
          break;
        case "士林區":
          i = 7;
          break;
        case "北投區":
          i = 8;
          break;
        case "內湖區":
          i = 9;
          break;
        case "南港區":
          i = 10;
          break;
        case "文山區":
          i = 11;
          break;
        default:
          i = 0;
          break;
      }
    }
    if (t) {
      switch (this.state.search.type) {
        case "運動":
          j = 0;
          break;
        case "公園":
          j = 1;
          break;
        case "廣場":
          j = 2;
          break;
        case "演講廳":
          j = 3;
          break;
        case "禮堂":
          j = 4;
          break;
        case "教室":
          j = 5;
          break;
        default:
          j = 0;
          break;
      }
    }

    s = {
      keyword: this.state.keyword,
      district: { do: d, index: i, name: this.state.search.district },
      type: { do: t, index: j, name: this.state.search.type },
    };

    this.props.setRentalSearch(s);
    event.preventDefault();
    this.props.history.push("/rentallist");
  }

  handleDropdownShow(index) {
    let a = [false, false];
    a[index] = !this.state.showdropdown[index];
    this.setState({
      showdropdown: a,
    });
  }

  render() {
    let dropdown = [];
    if (this.state.showdropdown[0]) {
      dropdown[0] = <Calender />;
    }
    if (this.state.showdropdown[1]) {
      dropdown[1] = <div className="dropdown"></div>;
    }
    if (this.state.showdropdown[2]) {
      dropdown[2] = <div className="dropdown"></div>;
    }
    return (
      <form className="s1_form" onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="input-t-container radius-start">
            <div
              className={
                this.state.search.keyword !== "" ? "d-none input" : "input"
              }
            >
              <img className="icon" src={search} alt="" />
              <div>
                <span className="input-span">場地關鍵字</span>
                <br />
                想借什麼場地？
              </div>
            </div>
            <label>
              <input
                className={
                  this.state.search.keyword !== ""
                    ? "input-t-have radius-start"
                    : "input-t radius-start"
                }
                type="text"
                name="keyword"
                value={this.state.search.keyword}
                onChange={this.handleInputChange}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                  }
                }}
              />
            </label>
          </div>
          <div className="line-container">
            <div className="line"></div>
          </div>
          <div className="input-btn-container">
            <div className="input">
              <img className="icon" src={start} alt="" />
              <div>
                <span className="input-span">租借開始</span>
                <br />
                {this.state.search.dateStart}
              </div>
              <img src={down} alt="" />
            </div>
            <input
              className={
                this.state.showdropdown[0]
                  ? "input-btn input-btn-active"
                  : "input-btn"
              }
              type="button"
              name="datestart"
              onClick={() => this.handleDropdownShow(0)}
            />
            {dropdown[0]}
          </div>
          <div className="line-container">
            <div className="line"></div>
          </div>
          <div className="input-btn-container">
            <div className="input radius-end">
              <img className="icon" src={end} alt="" />
              <div>
                <span className="input-span">租借結束</span>
                <br />
                {this.state.search.dateStart}
              </div>
              <img src={down} alt="" />
            </div>
            <input
              className={
                this.state.showdropdown[0]
                  ? "input-btn input-btn-active radius-end"
                  : "input-btn radius-end"
              }
              type="button"
              name="dateend"
              onClick={() => this.handleDropdownShow(0)}
            />
          </div>
        </div>
        <div className="row">
          <div>
            <div className="input radius-all">
              <img className="icon" src={position} alt="" />
              <div>
                <span className="input-span">場地位置</span>
                <br />
                {this.state.search.district}
              </div>
              <img src={down} alt="" />
            </div>
            <input
              className={
                this.state.showdropdown[1]
                  ? "input-btn radius-all input-btn-active"
                  : "input-btn radius-all"
              }
              type="button"
              name="district"
              onClick={() => this.handleDropdownShow(1)}
            />
            {dropdown[1]}
          </div>
          <div>
            <div className="input radius-all">
              <img className="icon" src={type} alt="" />
              <div>
                <span className="input-span">場地類型</span>
                <br />
                {this.state.search.type}
              </div>
              <img src={down} alt="" />
            </div>
            <input
              className={
                this.state.showdropdown[2]
                  ? "input-btn radius-all input-btn-active"
                  : "input-btn radius-all"
              }
              type="button"
              name="type"
              onClick={() => this.handleDropdownShow(2)}
            />
            {dropdown[2]}
          </div>
        </div>
        <Button type={2} text={"搜尋"} />
      </form>
    );
  }
}
export default withRouter(RentalHomeSearchBar);

/* <div>
          <label>
            <select
              className="s1_select"
              name="district"
              value={this.state.search.district}
              onChange={this.handleInputChange}
            >
              <option value="">行政區</option>
              <option value="中正區">中正區</option>
              <option value="大同區">大同區</option>
              <option value="中山區">中山區</option>
              <option value="松山區">松山區</option>
              <option value="大安區">大安區</option>
              <option value="萬華區">萬華區</option>
              <option value="信義區">信義區</option>
              <option value="士林區">士林區</option>
              <option value="北投區">北投區</option>
              <option value="內湖區">內湖區</option>
              <option value="南港區">南港區</option>
              <option value="文山區">文山區</option>
            </select>
          </label>
          <label>
            <select
              className="s1_select"
              name="type"
              value={this.state.search.type}
              onChange={this.handleInputChange}
            >
              <option value="">場地類型</option>
              <option value="運動">運動</option>
              <option value="公園">公園</option>
              <option value="廣場">廣場</option>
              <option value="演講廳">演講廳</option>
              <option value="禮堂">禮堂</option>
              <option value="教室">教室</option>
            </select>
          </label>
        </div> */
