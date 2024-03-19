import {
    Paper,
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
    Text,
    Anchor, Alert, Tooltip, Group, Center, rem, Box, Loader, Card,
} from '@mantine/core';
import LoginPage from './../assets/css/LoginPage.module.css';
import classes from './../assets/css/AuthenticationImage.module.css';
import {useViewportSize, getHotkeyHandler, useHotkeys} from '@mantine/hooks'
import {IconInfoCircle, IconLogin,IconArrowLeft} from '@tabler/icons-react';
import {isNotEmpty, useForm} from '@mantine/form';
import {Navigate, useNavigate} from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import TerminalbdBg from '../assets/images/terminalbd-bg.png'
import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import axios from "axios";
import {getIndexEntityData} from "../store/core/crudSlice.js";
import {useDispatch, useSelector} from "react-redux";

export default function Login() {

    const dispatch = useDispatch();
    const {t, i18n} = useTranslation();
    const navigate = useNavigate()
    const {height, width} = useViewportSize()
    const icon = <IconInfoCircle />;

    const [spinner, setSpinner] = useState(false);
    const [errorMessage,setErrorMessage] = useState('')

    const user = localStorage.getItem("user");

    const searchKeyword = useSelector((state) => state.crudSlice.searchKeyword)
    const indexData = useSelector((state) => state.crudSlice.indexEntityData)
    const productFilterData = useSelector((state) => state.inventoryCrudSlice.productFilterData)


    if(user){
        return <Navigate replace to="/"/>;
    }

    const form = useForm({
        initialValues: {username: '', password: ''},

        // functions will be used to validate values at corresponding key
        validate: {
            username: isNotEmpty(),
            password: isNotEmpty(),
        },
    });

    function login(data) {
        setSpinner(true);

        setTimeout(()=>{
            navigate('/')
        },1400)
    }



    useHotkeys([['alt+n', () => {
        document.getElementById('Username').focus()
    }]], []);
    //  console.log(height)


    return (
        <div className={classes.wrapper}>
            <Box
                component='form'
                onSubmit={form.onSubmit((values) => login(values))}
            >
            <Paper className={classes.form} radius={0} p={30} >
                <Title order={2} className={classes.title} ta="center" mt="md" mb={80}>
                    Welcome back to POSH!
                </Title>
                {
                    errorMessage &&
                    <Alert variant="light" color="red" radius="md" title={errorMessage} icon={icon}></Alert>
                }
                <Tooltip
                    label={t('UserNameRequired')}
                    px={20}
                    py={3}
                    opened={!!form.errors.username}
                    position="top-end"
                    color='red'
                    withArrow
                    offset={2}
                    transitionProps={{transition: 'pop-bottom-left', duration: 500}}
                >
                    <TextInput
                        withAsterisk
                        label={t('Username')}
                        placeholder={t('Username')}
                        size='md'
                        id={"Username"}
                        {...form.getInputProps('username')}
                        onKeyDown={getHotkeyHandler([
                            ['Enter', (e) => {
                                document.getElementById("Password").focus();
                            }],
                        ])}
                    />
                </Tooltip>

                <Tooltip
                    label={t('RequiredPassword')}
                    px={20}
                    py={3}
                    opened={!!form.errors.password}
                    position="top-end"
                    color='red'
                    withArrow
                    offset={2}
                    transitionProps={{transition: 'pop-bottom-left', duration: 500}}
                >
                    <PasswordInput
                        withAsterisk
                        label={t('Password')}
                        placeholder={t('Password')}
                        mt="md"
                        size="md"
                        {...form.getInputProps('password')}
                        id={"Password"}
                        onKeyDown={getHotkeyHandler([
                            ['Enter', (e) => {
                                document.getElementById("LoginSubmit").click();
                            }],
                        ])}
                    />

                </Tooltip>
                <Checkbox label="Keep me logged in" mt="xl" size="md" />
                <Group justify="space-between" mt="lg" className={LoginPage.controls}>
                    <Anchor c="dimmed" size="sm" className={LoginPage.control}>
                        <Center inline>
                            <IconArrowLeft style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                            <Box ml={5}>Back to the signup page</Box>
                        </Center>
                    </Anchor>
                    <Button fullWidth mt="xl" size="md" type='submit' id={"LoginSubmit"} className={LoginPage.control} rightSection={<IconLogin/>}>
                        {
                            spinner ? <Loader color="red" type="dots" size={30} /> : 'Login'
                        }
                    </Button>
                </Group>
            </Paper>
            </Box>
    </div>
  );
}