import { useRouter } from 'next/router'



const Fruit = () => {
    const router = useRouter()
    const { fruit } = router.query
    console.log(router)

    return <p>Min frukt: {fruit}</p>
}

export default Fruit

