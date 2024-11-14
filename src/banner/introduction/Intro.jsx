import clsx from 'clsx';
import format from './../../general_styles/General.module.css';
import styles from './intro.module.scss';


const Intro = () => {
  return (
    <div className={styles.intro}>

      <h1>Phần mềm <br></br> quản lý trung tâm</h1>
      <h1 style={{color: "rgb(105, 108, 255)"}}>ALL-IN-ONE</h1>

      <p className={styles.title}>
        Quản lý tất cả nghiệp vụ trên 1 nền tảng:
      </p>
      <div className={styles.features}>
        <div>
          <span>Học phí</span>
          <img className="icon" src="coin.svg" alt="coin" />
        </div>
        <div>
          <span>Học viên</span>
          <img src="student.svg" alt="coin" />
        </div>
        <div>
          <span>Giáo viên</span>
          <img src="teacher.svg" alt="coin" />
        </div>
        <div>
          <span>Lớp học</span>
          <img src="class.svg" alt="coin" />
        </div>
        <div>
          <span>Báo cáo</span>
          <img src="report.svg" alt="coin" />
        </div>
        <div>
          <span>Công việc</span>
          <img src="job.svg" alt="coin" />
        </div>
        <div>
          <span>Tuyển sinh</span>
          <img src="input.svg" alt="coin" />
        </div>
        <div>
          <span>Bài tập & Kiểm tra</span>
          <img src="exam.svg" alt="coin" />
        </div>
      </div>

      <div className={styles.registerBottom}>
        <a className={clsx (format.btn, styles.button)}>Đăng Ký Tư Vấn</a>
        <p className={styles.registerBottomText}>Miễn phí trọn đời</p>
      </div>

      <div className={styles.statistics}>

        <div className={styles.items}>
          <div className={styles.roundshape}></div>
          <div>
            <h3>50,000+</h3>
            <span>Học viên</span>
          </div>
        </div>

        <div className={styles.items}>
          <div className={styles.roundshape} style={{ backgroundColor: "rgb(255, 86, 48, 0.24)" }}></div>
          <div>
            <h3>2000+</h3>
            <span>Giáo viên</span>
          </div>
        </div>

        <div className={styles.items}>
          <div className={styles.roundshape} style={{ backgroundColor: "rgb(54, 179, 126, 0.24)" }}></div>
          <div>
            <h3>250+</h3>
            <span>Trung tâm</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Intro;
