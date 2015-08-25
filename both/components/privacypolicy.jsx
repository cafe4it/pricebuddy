PrivacyPolicy = React.createClass({
    displayName : 'PrivacyPolicy',
    render(){
        return (
            <div className="row">
                <div className="col s12">
                    <h3>Chính sách bảo mật thông tin</h3>
                    <h5>Cookies là gì?</h5>
                    <p>Thực tế là hầu hết các trang web đều dùng sử dụng cookies, 1 file nhỏ được tải xuống trình duyệt (Internet Explorer, Firefox, Chrome, Safari, Opera...) của các bạn.Dưới đây chúng tôi sẽ trình bày, cookies được chúng tôi sử dụng như nào và cách bạn có thể chặn cookie (nếu muốn), nhưng điều này có thể gây "hỏng" 1 số chức năng trên website.<br/>Tham khảo chi tiết về
                        <a href="https://vi.wikipedia.org/wiki/Cookie" target="_blank"> Cookies tại Wikipedia</a></p>
                    <h5>Chúng tôi sử dụng cookies như thế nào?</h5>
                    <p>Chúng tôi sử dụng cookies để chứa 1 đoạn mã, ví dụ : <span className='red-text'>AM9ThLKJNk8SJcJXnstS</span> ,đoạn mã này được sử dụng để xác định bạn là ai để <b>hiển thị lại danh sách các sản phẩm bạn đã và đang theo dõi</b>.<br/>Mỗi khi bạn lần đầu ghé thăm pricebuddy.xyz trên mỗi trình duyệt khác nhau, trên mỗi máy tính khác nhau thì hệ thống sẽ tự sinh 1 mã tương ứng, cho nên nếu bạn dùng trình duyệt Firefox trên máy tính để theo dõi giá 1 số sản phẩm, sau đó bạn lại dùng trình duyệt Chrome để theo dõi giá thêm 1 số sản phẩm nữa, do hệ thống tự sinh 2 mã cookies khác nhau nên hệ thống không thể biết đó là bạn để gộp 2 danh sách đó lại.<br/>Để giải quyết vấn đề trên bạn có thể đăng ký 1 tài khoản trên pricebuddy.xyz để tiện quản lý và theo dõi.</p>
                    <h5>Sử dụng Email</h5>
                    <p>Hiện tại chúng tôi mới chỉ cung cấp thông tin giảm giá của các sản phẩm bạn theo dõi qua Email bạn đăng ký, chúng tôi sẽ chỉ dùng Email của bạn để gửi các thông tin liên quan đến các sản phẩm bạn đăng ký, bạn có thể ngừng nhận hoặc xoá Email của bạn khỏi hệ thống của chúng tôi bất cứ thời điểm nào.</p>
                </div>
            </div>
        )
    }
})