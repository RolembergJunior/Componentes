import LoginCard from "@/components/LoginCard";
import PhotoCard from "@/components/PhotoCard";
import PriceCard from "@/components/PriceCard";
import UserCard from "@/components/UserCard";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-4 grid-rows-3">
        <LoginCard/>
        <PriceCard/>
        <PhotoCard/>
        <UserCard/>
      </div>
    </div>
  );
}
