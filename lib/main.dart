import 'package:eva_frontend/customAppBar.dart';
import 'package:eva_frontend/dashboard.dart';
import 'package:eva_frontend/homepage.dart';
import 'package:eva_frontend/userProfile.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Demo App',
      theme: ThemeData(
        primarySwatch: Colors.cyan,
      ),
      home: MyHomePage(
        title: 'Booking App',
      ),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);
  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  var _currentIndex = 0;
  final _scaffoldKey = GlobalKey<ScaffoldState>();
  final allBottomNavigationDestinationView = [
    HomePage(),
    UserProfile(),
    Dashboard(),
  ];

  void _onDrawerButtonPressed() {
    _scaffoldKey.currentState.openEndDrawer();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _scaffoldKey,
      endDrawer: Drawer(),
      appBar: CustomAppBar(
        onDrawerButtonPressed: _onDrawerButtonPressed,
        title: widget.title,
      ),
      body: SafeArea(
        minimum: const EdgeInsets.all(15),
        child: IndexedStack(
          index: _currentIndex,
          children: allBottomNavigationDestinationView,
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentIndex,
        onTap: (int currentIndex) {
          setState(() {
            _currentIndex = currentIndex;
          });
        },
        items: [
          BottomNavigationBarItem(
            label: "home",
            icon: Icon(
              Icons.home,
              color: Colors.grey,
            ),
          ),
          BottomNavigationBarItem(
            label: "dashboard",
            icon: Icon(
              Icons.dashboard,
              color: Colors.grey,
            ),
          ),
          BottomNavigationBarItem(
            label: "profile",
            icon: Icon(
              Icons.people,
              color: Colors.grey,
            ),
          ),
        ],
        elevation: 20,
        fixedColor: Colors.grey,
      ),
    );
  }
}
