import React from 'react'
export default function TeamCard(prop: { name: string, post: string }) {
    return (
        <div className="col-xl-2 col-sm-6 mb-5 team-card">
            <div className="rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-1.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 className="mb-0">{prop.name} </h5><span className="small text-uppercase">{prop.post} </span>
                <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
        </div>
    )
}

