export default async function DispalyNewByIdPage({
    params
}: {
    params: { id: number}
}) {
    params = await params

    return (
        <>
            <div>
                หน้าแสดงข้อมูลข่าวที่ {params.id}
            </div>
        </>
    )

}
