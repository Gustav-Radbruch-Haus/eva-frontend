import 'dart:ui';

import 'package:flutter/material.dart';

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  FocusNode _passwordFocusNode;
  TextEditingController _emailController;
  TextEditingController _passwordController;

  @override
  void initState() {
    super.initState();
    _passwordFocusNode = FocusNode();
    _emailController = TextEditingController();
    _passwordController = TextEditingController();
  }

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Center(
        child: Column(
          children: [
            SizedBox(
              height: 80,
            ),
            Image.asset(
              'assets/images/splashScreenImage.png',
              height: 100,
              width: 100,
            ),
            Text(
              "Booking App",
              style: Theme.of(context).textTheme.headline4.copyWith(
                    color: Color(0xFFFF5C3F),
                    fontWeight: FontWeight.bold,
                  ),
            ),
            SizedBox(
              height: 50,
            ),
            //e-mail Text field
            Container(
              constraints: BoxConstraints(
                maxWidth: MediaQuery.of(context).size.width - 100,
                maxHeight: 50,
              ),
              height: 50,
              width: MediaQuery.of(context).size.width - 100,
              child: TextFormField(
                autocorrect: false,
                decoration: InputDecoration(
                  labelText: " E-Mail",
                  focusedBorder: UnderlineInputBorder(
                    borderSide: BorderSide(
                      color: const Color(0xFFFF5C3F),
                    ),
                  ),
                ),
                validator: (input) {
                  if (input?.isEmpty ?? true) {
                    return "Please enter your email address";
                  }
                  return null;
                },
                onFieldSubmitted: (_) =>
                    FocusScope.of(context).requestFocus(_passwordFocusNode),
              ),
            ),
            SizedBox(
              height: 30,
            ),
            //password text field
            Container(
              constraints: BoxConstraints(
                maxWidth: MediaQuery.of(context).size.width - 100,
                maxHeight: 50,
              ),
              height: 50,
              width: MediaQuery.of(context).size.width - 100,
              child: TextFormField(
                obscureText: true,
                focusNode: _passwordFocusNode,
                decoration: InputDecoration(
                  labelText: " Passsword",
                  focusedBorder: UnderlineInputBorder(
                    borderSide: BorderSide(
                      color: const Color(0xFFFF5C3F),
                    ),
                  ),
                ),
                validator: (input) {
                  if (input?.isEmpty ?? true) {
                    return "Please enter your password";
                  }
                  return null;
                },
              ),
            ),
            SizedBox(
              height: 40,
            ),
            //login button
            InkWell(
              onTap: () {},
              child: Container(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.all(
                    Radius.circular(40),
                  ),
                  gradient: LinearGradient(
                    begin: Alignment.topRight,
                    end: Alignment.bottomLeft,
                    colors: [
                      Color(0xFF865BFE),
                      Color(0xFFB326FF),
                      Color(0xFF28C9FD),
                    ],
                  ),
                ),
                padding: EdgeInsets.all(0),
                height: 45,
                width: MediaQuery.of(context).size.width - 100,
                child: Text(
                  "LOGIN",
                  style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.w700,
                  ),
                ),
                alignment: Alignment.center,
              ),
            ),
            Spacer(),
            Text(
              "Don't have an account? Sign Up",
              style: Theme.of(context).textTheme.bodyText2,
            ),
            SizedBox(
              height: 30,
            ),
          ],
        ),
      ),
    );
  }
}
