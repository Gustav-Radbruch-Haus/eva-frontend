import React, {useState} from 'react';
import {
    Modal,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native';
import {useAppSelector} from "../../hooks/reduxHooks";
import UserService from "../../services/UserService";

const EditAttributeModal = ({visible, onClose, attribute, value, onValueChange}) => {
    const {theme} = useAppSelector((state) => state.theme);

    const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 49 : StatusBar.currentHeight;
    
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={visible}
        >
            <View style={{flex: 1}}>
                <View style={{height: STATUS_BAR_HEIGHT, backgroundColor: "#000"}}>
                    <StatusBar
                        translucent
                        backgroundColor="#000"
                        barStyle="light-content"
                    />
                </View>
                <SafeAreaView>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalLabel}>{attribute}</Text>
                        <View style={styles.modalFormContainer}>
                            <TextInput
                                style={styles.modalInput}
                                value={value}
                                onChangeText={onValueChange}
                            />
                            <TouchableHighlight
                                style={styles.modalButton}
                                onPress={onClose}
                            >
                                <Text style={styles.modalButtonText}>Save</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        </Modal>
    );
};

const ProfileSettings = () => {

    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('johndoe@example.com');
    const [password, setPassword] = useState('');

    UserService.fetchUserdata().then(r => {
    });

    UserService.getCurrentUser().then((value) => {
        setUsername(value);
        return;
    })

    UserService.getCurrentUserFullname().then((value) => {
        setFullName(value);
        return;
    })

    UserService.getCurrentUserMail().then((value) => {
        setEmail(value);
        return;
    })

    const [showFullNameModal, setShowFullNameModal] = useState(false);
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [showPasswordModal, setShowPasswordModal] = useState(false);

    const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 49 : StatusBar.currentHeight;

    const {theme} = useAppSelector((state) => state.theme);

    return (
        <View style={[styles.container, {backgroundColor: theme.colors.background}]}>
            <View style={{height: STATUS_BAR_HEIGHT, backgroundColor: "#000"}}>
                <StatusBar
                    translucent
                    backgroundColor="#000"
                    barStyle="light-content"
                />
            </View>
            <SafeAreaView>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Profile</Text>
                </View>
                <View style={styles.profileContainer}>
                    <View style={styles.profileItemContainer}>
                        <Text style={styles.profileItemLabel}>Username:</Text>
                        <Text style={styles.profileItemValue}>{username}</Text>
                    </View>

                    <TouchableOpacity onPress={() => setShowFullNameModal(true)}>
                        <View style={styles.profileItemContainer}>
                            <Text style={styles.profileItemLabel}>Full Name:</Text>
                            <Text style={styles.profileItemValue}>{fullName}</Text>
                        </View>
                    </TouchableOpacity>
                    <EditAttributeModal
                        visible={showFullNameModal}
                        onClose={() => setShowFullNameModal(false)}
                        attribute="Full Name"
                        value={fullName}
                        onValueChange={setFullName}
                    />

                    <TouchableOpacity onPress={() => setShowEmailModal(true)}>
                        <View style={styles.profileItemContainer}>
                            <Text style={styles.profileItemLabel}>Email:</Text>
                            <Text style={styles.profileItemValue}>{email}</Text>
                        </View>
                    </TouchableOpacity>
                    <EditAttributeModal
                        visible={showEmailModal}
                        onClose={() => setShowEmailModal(false)}
                        attribute="Email"
                        value={email}
                        onValueChange={setEmail}
                    />


                    <TouchableOpacity onPress={() => setShowEmailModal(true)}>
                        <View style={styles.profileItemContainer}>
                            <Text style={styles.profileItemLabel}>Password:</Text>
                            <Text style={styles.profileItemValue}>{password}</Text>
                        </View>
                    </TouchableOpacity>
                    <EditAttributeModal
                        visible={showPasswordModal}
                        onClose={() => setShowPasswordModal(false)}
                        attribute="Email"
                        value={email}
                        onValueChange={setPassword}
                    />

                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    header: {
        height: 60,
        padding: 15,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    profileContainer: {
        padding: 20,
    },
    profileItemContainer: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    profileItemLabel: {
        fontWeight: 'bold',
    },
    profileItemValue: {
        flex: 1,
        textAlign: 'right',
    },
    modalContainer: {
        //flex: 1,
        height: '100%',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',

    },
    modalFormContainer: {
        alignItems: 'center',
    },
    modalLabel: {
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        width: '100%'
    },
    modalButton: {
        height: 40,
        backgroundColor: '#333',
        paddingVertical: 10,
        alignItems: 'center',
        width: '100%'
    },
    modalButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default ProfileSettings;