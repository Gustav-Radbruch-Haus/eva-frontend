import 'package:flutter/material.dart';
import 'dart:math';

class CustomAppBar extends StatelessWidget with PreferredSizeWidget {
  const CustomAppBar({
    Key key,
    this.onDrawerButtonPressed,
    this.title,
  }) : super(key: key);

  final onDrawerButtonPressed;
  final String title;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.transparent,
      child: Container(
        margin: const EdgeInsets.fromLTRB(10, 5, 10, 5),
        decoration: BoxDecoration(
          color: Colors.white,
          border: Border.all(color: Colors.black, width: 0.2),
          borderRadius: BorderRadius.all(
            Radius.circular(10.0),
          ),
        ),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisSize: MainAxisSize.max,
          children: [
            SizedBox(width: 10),
             Container(
              height: kToolbarHeight - 25,
              width: 30,
              color: Colors.cyan,
            ),
            Expanded(
              child: Container(
                height: kToolbarHeight,
              ),
            ),
           
            Text(title),
            Spacer(),
            Transform.rotate(
              angle: pi * 3 / 4,
              child: Icon(
                Icons.send_sharp,
                color: Colors.cyan,
              ),
            ),
            SizedBox(
              width: 20,
            ),
            IconButton(
              onPressed: onDrawerButtonPressed,
              icon: Icon(Icons.menu),
            )
          ],
        ),
      ),
    );
  }

  @override
  Size get preferredSize => Size.fromHeight(kToolbarHeight);
}
