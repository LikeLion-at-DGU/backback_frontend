import PurposeChoice from "../../../components/write/PurposeChoice";
import ExerciseChoice from "../../../components/write/ExerciseChoice";

export default function Home() {
    return (
        <div>
            <div
                style={{
                    width: "100%",
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                }}
            >
                <div style={{ width: "45%" }}>
                    < ExerciseChoice />
                </div>
                <div style={{ width: "45%" }}>
                    < PurposeChoice />
                </div>
            </div>
            <div
                style={{
                    width: "100%",
                    height: "500px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                {/* 여기에 postwrite */}

            </div>

        </div>
    )
}
