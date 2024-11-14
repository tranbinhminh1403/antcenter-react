//import blue content
import Content1 from "./content/blue/content1";
import Content2 from "./content/blue/content2";
import Content3 from "./content/blue/content3";
import Content4 from "./content/blue/content4";
import Content5 from "./content/blue/content5";
import Content6 from "./content/blue/content6";

//import pink content
import Pink1 from "./content/pink/Pink1";
import Pink2 from "./content/pink/Pink2";
import Pink3 from "./content/pink/Pink3";

//import green content
import Green1 from "./content/green/Green1";
import Green2 from "./content/green/Green2";
import Green3 from "./content/green/Green3";

// blue card
export const blueItems = [
  {
    key: "1",
    label: "Tuyển Sinh",
    children: <Content1 />,
  },
  {
    key: "2",
    label: "Công Việc",
    children: <Content2 />,
  },
  {
    key: "3",
    label: "Lớp Học",
    children: <Content3 />,
  },
  {
    key: "4",
    label: "Học Viên",
    children: <Content4 />,
  },
  {
    key: "5",
    label: "Giáo Viên",
    children: <Content5 />,
  },
  {
    key: "6",
    label: "Tài Chính",
    children: <Content6 />,
  },
];

export const blueTitle = {
  title1: "Quản Lý Toàn Diện Trên Một Hệ Thống Duy Nhất",
  title2:
    "Dành riêng cho các trung tâm đào tạo. KHÔNG GIỚI HẠN dung lượng bộ nhớ",
};

export const blueColorScheme = {
  backgroundColor: "#EDFAFE",
  color: "rgb(73, 204, 249)",
};

//pink card
export const pinkItems = [
  {
    key: "1",
    label: "Báo Cáo Thông Minh",
    children: <Pink1/>,
  },
  {
    key: "2",
    label: "Tự Động Tính Phí",
    children: <Pink2 />,
  },
  {
    key: "3",
    label: "Thiết Lập Đơn Giản",
    children: <Pink3 />,
  },
];

export const pinkTitle = {
  title1: "Tự động hóa quản lý học phí",
  title2: "Tối ưu 40% chi phí vận hành",
};

export const pinkColorScheme = {
  backgroundColor: "rgb(255, 248, 251)",
  color: "rgb(253, 113, 175)",
};

//green card
export const greenItems = [
    {
      key: "1",
      label: "Báo Cáo Học Tập",
      children: <Green1/>,
    },
    {
      key: "2",
      label: "Bài Tập & Kiểm Tra",
      children: <Green2 />,
    },
    {
      key: "3",
      label: "Chấm Điểm & Trả Bài",
      children: <Green3 />,
    }
]

export const greenTitle = {
  title1: "Kết nối học viên và phụ huynh hiệu quả",
  title2: "Tài khoản học viên KHÔNG GIỚI HẠN và MIỄN PHÍ trọn đời"
}

export const greenColorScheme = {    
    backgroundColor: "rgb(240, 251, 248)",
    color: "rgb(0, 184, 132)",
}