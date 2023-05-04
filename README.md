# Buổi 3
<ul>
    <li>
        Props là thuộc tính có sẵn của react class component(do kết thừa từ class Component) dùng để nhận giá trị từ component cha truyền vào(Component cha là nơi sử dụng thẻ). Props không thể gán giá trị mới cho nó
        <br>
        Không thể dùng this.props.propName = 'giá trị mới' ==> sai cú pháp  
    </li>
    <li>
        Props khác state ?
        <p>
            Props và state đều là thuộc tính có sẵn của react class component để binding dữ liệu trên giao diện,
            TUY NHIÊN: <br />
            + state: dùng để lưu các giá trị thay đổi trên chính component đó. State có thẻ được gán lại thông qua phương thức setState <br/>
            + Props: dùng để chứa các giá trị từ component cha truyền vào. Props không thể gán lại giá trị
        </p>
    </li>
</ul>

# Các bước khi thực hiện 1 task hoặc chức năng với reactjs
B1: Dàn layout chia component
B2: Xác định dữ liệu thay đổi trên giao diện(state):
+String?
+Boolean
+Number
+Object
+Aray -> + Number, string, object
Componet chứa thuộc tính state sẽ cần 2 yếu tố:
+ Chứa UI của state biding ra
+ Chứa nút xử lý làm thay đổi state
B3:Binding state:
+ Trực tiếp thì binding trực tiếp = {}
+ Gián tiếp 
B4:SetState


# Mounting

