import './Work.css';
import engi from './engi.svg';
import page1 from './page1.svg';
import edit from './edit.svg';
import score from './score.svg'
import 'bootstrap/dist/css/bootstrap.min.css';

function Work () {
    return (
        <div className="Rectangle-Copy">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                    <img src={engi} class="engi"/>
                    </div>
                    <div className="col-6">
                        <div className="faculty-txt">
                                คณะวิศวกรรมศาสตร์
                        </div>
                        <div className="depart-txt">
                                สาขาวิศวกรรมทั่วไป
                        </div>
                        <div className="uni-txt">
                                จุฬาลงกรณ์มหาวิทยาลัย
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="page-1">
                            <img src={page1} class="page1"/>
                        </div>
                    </div>
                    <div className="m-3 path"></div>   
                </div>
                <div className="row">
                    <div className="col-4 round-txt">
                            รอบที่เปิด
                    </div>
                    <div className="row">
                        <div className="col oval"><div className="txt-oval">1</div></div>
                        <div className="col oval"><div className="txt-oval">2</div></div>
                        <div className="col oval-grey"><div className="txt-oval">3</div></div>
                        <div className="col oval"><div className="txt-oval">4</div></div>
                        <div className="col oval-grey"><div className="txt-oval">5</div></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-9 txt-admission">
                        รอบที่ 4 : Admission
                    </div>
                    <div className="row score-rectangle">
                        <div className="txt-edit-score">แก้ไขคะแนน</div>
                        <img src={edit} class="edit-icon"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-7">
                        <img src={score} class="score-icon"/>
                    </div>
                    <div className="col-5">
                        <div className="txt-score-des">คะแนนของคุณคือ</div>
                        <div className="txt-score">23,453</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="txt-score-row">
                            20,845
                        </div>
                        <div className="txt-score-row-des">
                            คะแนนต่ำสุด 60
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="txt-score-row">
                            21,345
                        </div>
                        <div className="txt-score-row-des">
                            คะแนนเฉลี่ย 60
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="txt-score-row">
                            23,415
                        </div>
                        <div className="txt-score-row-des">
                            คะแนนสูงสุด 60
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default Work;