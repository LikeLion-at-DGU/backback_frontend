import Column, { ColumnProps } from "./Column";
import { ScrollContent } from "./PostDetail";

export interface ColumnListProps {
    columns: ColumnProps[];
}

const ColumnList: React.FC<ColumnListProps> = ({ ...prop }) => {
    const listItems = prop.columns.map((item, index) => (
        <Column
            id={item.id}
            key={index}
            nickname={item.nickname}
            type={item.type}
            content={item.content}
            createdAt={item.createdAt}
            title={item.title}
            image={item.image}
            views={item.views} 
            profileimage={""}
            index={index}
        />
    ));
    return (
        <ScrollContent>
            <div style={{ width: "100%", padding: "0px 15px 0px 15px" }}>
                <div
                    style={{
                        width: "100%",
                        height: "45px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        borderBottom: "1px solid black",
                    }}
                >
                <div
                    style={{
                    textAlign: "left",
                    flex: "1",
                    fontFamily: "MainFont",
                    fontSize: "14px",
                    }}
                >
                    칼럼 작성하기
                </div>
                </div>
            </div>
            <div
                style={{
                    display: "grid",
                    width: "100%",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    overflow: "auto",
                    scrollBehavior: "smooth",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {listItems}
            </div>
            </ScrollContent>
        );
};

export default ColumnList;