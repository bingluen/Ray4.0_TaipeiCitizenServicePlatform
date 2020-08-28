const SortData = {
  theme: [
    {
      name: "生育托兒",
      info: "家庭生育津貼／幼兒托育服務",
    },
    {
      name: "醫療照護",
      info: "醫療照護等服務",
    },
    {
      name: "安全健康",
      info: "災害／醫藥衛生／其他服務",
      tab: ["災害", "醫藥衛生", "其他"],
    },
    {
      name: "殯葬禮儀",
      info: "殯葬事宜服務",
    },
    {
      name: "綜合申請",
      info: "一般申請／特殊拍攝／廣告文宣／活動申請",
      tab: ["一般申請", "特殊拍攝", "廣告文宣", "活動申請"],
    },
    {
      name: "戶政相關",
      info: "戶籍／兵役／其他等辦理服務",
      tab: ["戶籍", "兵役", "其他"],
    },
    {
      name: "社會關懷",
      info:
        "原住民／婦幼／銀髮高齡／身心障礙／中低收／特殊境遇",
      tab: ["原住民", "婦幼", "老年人", "身心障礙", "中低收入戶", "特殊境遇"],
    },
    {
      name: "補助獎勵",
      info: "各項補助／獎勵金申請",
      tab: ["職能", "活動", "醫療", "其他"],
    },
    {
      name: "就業扶植",
      info: "就業扶植／創業相關政策服務",
    },
    {
      name: "產業相關",
      info:
        "工廠／農工商業者／水電器／非營利產業／獎勵補助融資／其他",
      tab: [
        "工廠",
        "農工商業者",
        "水電器",
        "非營利產業",
        "獎勵補助融資",
        "其他",
      ],
    },
    {
      name: "勞資權益",
      info: "勞工／資方相關權利保障服務",
      tab: ["勞方", "資方"],
    },
    {
      name: "稅務相關",
      info: "賦稅／線上繳稅服務",
      tab: ["賦稅申請", "線上繳稅"],
    },
    {
      name: "教育學習",
      info: "教育學習／文化推廣服務",
      tab: ["教育學習", "文化推廣"],
    },
    {
      name: "住屋相關",
      info: "購屋／居住相關服務申請",
      tab: ["購屋", "居住"],
    },
    {
      name: "休閒相關",
      info: "參訪等活動服務",
      tab: ["休閒設施預約", "導覽申請", "政府機關參訪"],
    },
    {
      name: "宗教相關",
      info: "宗教相關服務",
    },
    {
      name: "動物醫護",
      info: "動物保護／動物醫療照護服務",
      tab: ["動物保護", "動物醫療照護"],
    },
    {
      name: "環境保護",
      info: "環境管制／生態保護服務",
      tab: ["噪音", "污染管制", "回收", "生態保護"],
    },
    {
      name: "交通相關",
      info: "違規檢舉／行車事故／通行申請／停車相關／其他服務",
      tab: ["違規檢舉", "行車事故", "通行申請", "停車相關", "其他"],
    },
    {
      name: "公共工程",
      info: "公共建設工程／開工申報服務",
      tab: ["公共建設工程", "開工申報"],
    },
  ],
  organ: [
    {
      name: "民政局",
      tab: ["民政局", "殯葬管理處"],
    },
    {
      name: "財政局",
      tab: ["財政局", "稅捐處"],
    },
    {
      name: "教育局",
      tab: ["教育局", "市立動物園", "天文館", "圖書館"],
    },
    {
      name: "產業發展局",
      tab: ["產業發展局", "動保處", "市場處", "商業處"],
    },
    {
      name: "工務局",
      tab: [
        "工務局",
        "新工處",
        "公園路燈管理處",
        "衛生下水道工程處",
        "大地工程處",
        "水利工程處",
      ],
    },
    {
      name: "社會局",
      tab: [
        "社會局",
        "士林陽明教養院",
        "浩然敬老院",
        "家庭暴力暨性侵害防治中心",
      ],
    },
    {
      name: "警察局",
      tab: ["警察局", "刑事警察大隊", "交通警察大隊"],
    },
    {
      name: "衛生局",
      tab: ["衛生局", "市立聯合醫院"],
    },
    {
      name: "環境保護局",
      tab: ["環境保護局", "北投垃圾焚化廠"],
    },
    {
      name: "地政局",
    },
    {
      name: "觀光傳播局",
    },
    {
      name: "兵役處",
    },
    {
      name: "法務局",
    },
    {
      name: "自來水處",
    },
    {
      name: "捷運工程局",
    },
    {
      name: "勞動局",
      tab: [
        "勞動局",
        "勞動力重建運用處",
        "職能發展學院",
        "就業服務處",
        "勞動檢處",
      ],
    },
    {
      name: "交通局",
      tab: ["交通事件裁決所", "交通局", "公共運輸處", "停車管理工程處"],
    },
    {
      name: "政風局",
    },
    {
      name: "都發局",
      tab: ["都發局", "建築管理工程處", "都更處"],
    },
    {
      name: "消防局",
    },
    {
      name: "原民會",
    },
    {
      name: "客委會",
    },
    {
      name: "文化局",
      tab: ["文化局", "市立國樂團", "市立文獻館", "市立美術館", "中山堂管理所"],
    },
    {
      name: "體育局",
    },
    {
      name: "資訊局",
    },
    {
      name: "區公所",
    },
    {
      name: "綜合分類",
    },
    {
      name: "臺北捷運公司",
    },
  ],
};

export default SortData;
