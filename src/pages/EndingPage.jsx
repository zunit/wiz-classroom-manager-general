import Confetti from "@/components/confetti/Confetti";
import ActivityIcon from "@/layout/timetable-settings/ActivityIcon";
import "@/styles/ending-page.css"

function EndingPage() {
  return (
    <>
      <div id="ending-page-container">
        <h1>Congratulations! You finished the class!</h1>
        <h2>Thanks for coming today!</h2>
        <ActivityIcon activityType="END" />
      </div>
      <Confetti particleCount={100} runs={-1} frequency={2000} />
    </>
  );
}

export default EndingPage;
