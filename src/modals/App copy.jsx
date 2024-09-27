import WarnModal from "./modals/WarnModal";
import FormModal from "./modals/FormModal";
import Modal from "./modals/Modal";

const App = () => {
  return (
    <div className="container py-5 d-flex flex-column gap-5">
      <WarnModal />
      <FormModal />
      <hr />
      <Modal>
        <p>Değişiklikleri onaylamak istiyor musunuz?</p>
      </Modal>
      <Modal>
        <label>Kullanıcı Adı</label>
        <input className="form-control" type="text" />
        <label>Şifre</label>
        <input className="form-control" type="password" />
      </Modal>
    </div>
  );
};

export default App;
