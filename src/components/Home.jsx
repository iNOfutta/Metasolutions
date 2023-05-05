import Card from "./Card"

export default function Home(){
    return(
        <>  
            <p className="text-center text-2xl p-20">Bem-vindo a Metasolutions, este sistema feito para pessoas de todas as faixas etárias poderem realizar seus projectos e sonhos pelo apoio que a nossa plataforma oferece. Foi feito para você!</p>
            

            <div className="p-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
                    <Card pic="https://mlv2av5beeba.i.optimole.com/cb:mn9SHGcX.lAuvkaMT/w:auto/id:eaecd995688cda1e7216e923febcc8b3/directUpload/VFGT.jpg" title="Kids" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil."/>
                    <Card pic="https://mlv2av5beeba.i.optimole.com/cb:mVUhNwUb.l1FxZk7e/w:auto/id:4f320b449609f17c9ad4d37b23e7b544/directUpload/OP.jpg" title="Teens"  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil."/>
                    <Card pic="https://mlv2av5beeba.i.optimole.com/cb:mEZ4dVYM.lhGdbUPp/w:auto/id:b93f29353b51ceac4b3d76102348fa36/directUpload/OPLJ.jpg" title="Adults"  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil."/>
                    <Card pic="https://mlv2av5beeba.i.optimole.com/cb:mZoLUP1D.l70tDvEi/w:auto/id:80b89c25407e79cb28636aa4f71daa99/directUpload/YUTR.jpg" title="Elders"  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil."/>
            </div>


            <p className="text-center text-2xl p-20">A nossa intenção é ver as pessoas sorrindo por seus sonhos e projectos realizados, numa das seguintes áreas:</p>
            <div className="p-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
                    <Card pic="https://mlv2av5beeba.i.optimole.com/cb:mg75A2yV.l1DcPjJG/w:auto/id:677d353a442e8bd7d6be0782161b3bb3/directUpload/QAZS.jpg" title="CRESCIMENTO PESSOAL" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil."/>
                    <Card pic="https://mlv2av5beeba.i.optimole.com/cb:mow1L6t1.ly6fVXgH/w:auto/id:a2dcf0c3b89641be56d168b27627e0e7/directUpload/gilp.jpg" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil." title="CRESCIMENTO SOCIAL"/>
                    <Card pic="https://mlv2av5beeba.i.optimole.com/cb:mGmWa2D5.lJ13BXcF/w:auto/id:f577c0cf6cee3c52c1db57f1a939e7df/directUpload/ERD.jpg" title="CRESCIMENTO ECONÔMICO" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil."/>
                    <Card pic="https://mlv2av5beeba.i.optimole.com/cb:mLwGUsN8.lZYW3mYN/w:auto/id:80aa5d62c8dae114994345472fa59f6a/directUpload/vbhy.jpg" title="CRESCIMENTO CULTURAL" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil."/>
            </div>
        </>
    )
}
