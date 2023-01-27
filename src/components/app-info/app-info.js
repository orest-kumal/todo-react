import "./app-info.css";
const AppInfo = ({increased,employees}) => {
  return (
    <div className="app-info">
      <h1>Звіт працівників в компанії FriendsCompany:</h1>
      <h2>Загальна кількість працівників:{employees}</h2>
      <h2>Премію отримають:{increased}</h2>
    </div>
  );
};

export default AppInfo;
