import defaultProfile from "../../public/img/default.jpg";

function UserPhotoIcon() {
  return (
    <div className="w-10 h-10 rounded-full">
      <img
        src={defaultProfile}
        alt="profile photo"
        className="object-cover rounded-full"
      />
    </div>
  );
}

export default UserPhotoIcon;
