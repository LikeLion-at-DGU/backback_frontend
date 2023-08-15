interface PoolProps {
    completedList: number[]
}

const poolBackgroundStyle = {
    margin: '0 auto',
    width: '370px',
    position: 'relative',
    height: '205px',
    backgroundSize: "contain",
    backgroundImage: "url('/assets/images/Pool.png')",
    backgroundRepeat: "no-repeat"
} as React.CSSProperties;

const poolStyle = {
    maxWidth: '370px',
    minHeight: '142px',
    top: '42px',
    left: '42px',
    right: '43px',
    display: 'flex',
    flexWrap: 'wrap',
    position: 'absolute',
} as React.CSSProperties;

const waterFallStyle = {
    width: '12.5%',
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center'
}

const waterFallImageStyle = {
    width: '16px',
    height: '22px'
} as React.CSSProperties;

export function Pool({completedList}: PoolProps) {
    const waterDropIconPath = '/assets/images/water_fall.png'

    return (
        <div style={poolBackgroundStyle}>
            <div
                style={poolStyle}
            >
                {completedList.map((completed: number, index: number) => (
                    <div
                        style={waterFallStyle}
                    >
                        {completed != 0 && (
                            <img 
                                src={waterDropIconPath}
                                style={waterFallImageStyle}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}