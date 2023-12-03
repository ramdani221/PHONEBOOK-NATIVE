import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadContact, loadPage } from "../actions/actions/contacts";
import { FlatList, View } from "react-native";


export default function ContactList({ filter }: { filter: { keyword: string, sort: string } }) {
    const contacts = useSelector((state: any) => state.contacts);
    const dispatch: any = useDispatch();
    const [pageNum, setPageNum] = useState({page: 2});
    const [isLoading, setIsLoading] = useState(false);

    const handleScroll = () => {
        if(contacts.page >= contacts.pages) return setIsLoading(false);
        dispatch(loadPage({...filter, page: pageNum}));
        setPageNum({page: pageNum.page ++});
        setIsLoading(false)
    }
    
    useEffect(() => {
        dispatch(loadContact(filter));
    }, [dispatch, filter])

    return (
        <View>
            <FlatList
                data={contacts.phonebooks}
                renderItem={({item} => )}
            />
        </View>
    )
}   