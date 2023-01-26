interface BannerProps {
    imgPaths: string[],
    height: string, 
    children: React.ReactNode[]
}

export default function Banner({ imgPaths, height, children }: BannerProps): JSX.Element {
    const urls = imgPaths.map(imgPath => `url(${imgPath})`).join(',')
    return (<div className="d-flex justify-content-center align-items-center" style={{zIndex: '-1', height: height, fontFamily:"'Montserrat', serif", fontSize: "2.75em"}}>
        {children}
        <div className='col-12 row m-0 p-o banner' style={{ backgroundImage: urls, height: height, width: '100%' }}>

        </div>
    </div>
    )
}
