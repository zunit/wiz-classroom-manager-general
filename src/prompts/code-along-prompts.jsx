import React from "react";
import { getRandomElement } from "@/utils/arrayUtils";
const ftcChallengeRoot = "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Wiz-Camp/FTC-Camp/Level-5-Classroom-Manager-ftc/code-along";

const promptsList = [
  {
    id: "basic-teleop",
    title: "FTC Code Along: Basic TeleOp Drive",
    element: (
      <>
        <h2>FTC Code Along: Basic TeleOp Drive</h2>
        <p>
          Create a TeleOp OpMode that drives a 2-motor robot using the left stick
          Y-axis for forward/backward movement and the right stick X-axis for turning.
        </p>
        <p>
          Also show the left and right motor power on telemetry.
        </p>
        <hr />
      </>
    ),
    answerCode: `package org.firstinspires.ftc.teamcode;

import com.qualcomm.robotcore.eventloop.opmode.LinearOpMode;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;
import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.util.Range;

@TeleOp(name = "Basic TeleOp Drive")
public class BasicTeleOpDrive extends LinearOpMode {
    private DcMotor leftMotor;
    private DcMotor rightMotor;

    @Override
    public void runOpMode() {
        leftMotor = hardwareMap.get(DcMotor.class, "leftMotor");
        rightMotor = hardwareMap.get(DcMotor.class, "rightMotor");

        rightMotor.setDirection(DcMotor.Direction.REVERSE);

        waitForStart();

        while (opModeIsActive()) {
            double drive = -gamepad1.left_stick_y;
            double turn = gamepad1.right_stick_x;

            double leftPower = Range.clip(drive + turn, -1.0, 1.0);
            double rightPower = Range.clip(drive - turn, -1.0, 1.0);

            leftMotor.setPower(leftPower);
            rightMotor.setPower(rightPower);

            telemetry.addData("Left Power", leftPower);
            telemetry.addData("Right Power", rightPower);
            telemetry.update();
        }
    }
}`,
  },

  {
    id: "slow-mode",
    title: "FTC Code Along: Driver Control Upgrade",
    element: (
      <>
        <h2>FTC Code Along: Driver Control Upgrade</h2>
        <p>
          Add a slow mode to TeleOp. When the driver holds the right bumper,
          all drive power should be cut in half for precision driving.
        </p>
        <p>
          Display on telemetry whether slow mode is ON or OFF.
        </p>
        <hr />
      </>
    ),
    answerCode: `package org.firstinspires.ftc.teamcode;

import com.qualcomm.robotcore.eventloop.opmode.LinearOpMode;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;
import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.util.Range;

@TeleOp(name = "Driver Control Upgrade")
public class DriverControlUpgrade extends LinearOpMode {
    private DcMotor leftMotor;
    private DcMotor rightMotor;

    @Override
    public void runOpMode() {
        leftMotor = hardwareMap.get(DcMotor.class, "leftMotor");
        rightMotor = hardwareMap.get(DcMotor.class, "rightMotor");

        rightMotor.setDirection(DcMotor.Direction.REVERSE);

        waitForStart();

        while (opModeIsActive()) {
            double drive = -gamepad1.left_stick_y;
            double turn = gamepad1.right_stick_x;

            boolean slowMode = gamepad1.right_bumper;
            double speedMultiplier = slowMode ? 0.5 : 1.0;

            double leftPower = Range.clip((drive + turn) * speedMultiplier, -1.0, 1.0);
            double rightPower = Range.clip((drive - turn) * speedMultiplier, -1.0, 1.0);

            leftMotor.setPower(leftPower);
            rightMotor.setPower(rightPower);

            telemetry.addData("Slow Mode", slowMode ? "ON" : "OFF");
            telemetry.addData("Left Power", leftPower);
            telemetry.addData("Right Power", rightPower);
            telemetry.update();
        }
    }
}`,
  },

  {
    id: "servo-toggle",
    title: "FTC Code Along: Servo Toggle",
    element: (
      <>
        <h2>FTC Code Along: Servo Toggle</h2>
        <p>
          Use gamepad buttons to open and close a claw servo.
        </p>
        <p>
          Press Y to open the claw and A to close it. Show the servo position on telemetry.
        </p>
        <hr />
      </>
    ),
    answerCode: `package org.firstinspires.ftc.teamcode;

import com.qualcomm.robotcore.eventloop.opmode.LinearOpMode;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;
import com.qualcomm.robotcore.hardware.Servo;

@TeleOp(name = "Servo Toggle")
public class ServoToggle extends LinearOpMode {
    private Servo clawServo;

    private static final double OPEN_POSITION = 0.8;
    private static final double CLOSED_POSITION = 0.2;

    @Override
    public void runOpMode() {
        clawServo = hardwareMap.get(Servo.class, "clawServo");
        clawServo.setPosition(CLOSED_POSITION);

        waitForStart();

        while (opModeIsActive()) {
            if (gamepad1.y) {
                clawServo.setPosition(OPEN_POSITION);
            } else if (gamepad1.a) {
                clawServo.setPosition(CLOSED_POSITION);
            }

            telemetry.addData("Claw Position", clawServo.getPosition());
            telemetry.update();
        }
    }
}`,
  },

  {
    id: "distance-sensor",
    title: "FTC Code Along: Distance Sensor Safety Stop",
    element: (
      <>
        <h2>FTC Code Along: Distance Sensor Safety Stop</h2>
        <p>
          Drive forward slowly until a distance sensor detects an object closer than
          10 cm, then stop immediately.
        </p>
        <p>
          Show the live distance reading in telemetry.
        </p>
        <hr />
      </>
    ),
    answerCode: `package org.firstinspires.ftc.teamcode;

import com.qualcomm.robotcore.eventloop.opmode.Autonomous;
import com.qualcomm.robotcore.eventloop.opmode.LinearOpMode;
import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.hardware.DistanceSensor;
import org.firstinspires.ftc.robotcore.external.navigation.DistanceUnit;

@Autonomous(name = "Distance Sensor Safety Stop")
public class DistanceSensorSafetyStop extends LinearOpMode {
    private DcMotor leftMotor;
    private DcMotor rightMotor;
    private DistanceSensor distanceSensor;

    @Override
    public void runOpMode() {
        leftMotor = hardwareMap.get(DcMotor.class, "leftMotor");
        rightMotor = hardwareMap.get(DcMotor.class, "rightMotor");
        distanceSensor = hardwareMap.get(DistanceSensor.class, "distanceSensor");

        rightMotor.setDirection(DcMotor.Direction.REVERSE);

        waitForStart();

        while (opModeIsActive()) {
            double distanceCm = distanceSensor.getDistance(DistanceUnit.CM);

            if (distanceCm > 10.0) {
                leftMotor.setPower(0.25);
                rightMotor.setPower(0.25);
            } else {
                leftMotor.setPower(0.0);
                rightMotor.setPower(0.0);
                telemetry.addLine("Object detected - stopping");
                telemetry.addData("Distance (cm)", distanceCm);
                telemetry.update();
                break;
            }

            telemetry.addData("Distance (cm)", distanceCm);
            telemetry.update();
        }

        leftMotor.setPower(0.0);
        rightMotor.setPower(0.0);
    }
}`,
  },
];

function buildAnswerElement(prompt) {
  if (!prompt) return null;

  return (
    <>
      <h2>{prompt.title} - Answer</h2>
      <pre className="code-block">{prompt.answerCode}</pre>
      <hr />
    </>
  );
}

export function generateFTCCodeAlongPromptData() {
  return getRandomElement(promptsList);
}

export function generateFTCCodeAlongPrompt() {
  return generateFTCCodeAlongPromptData().element;
}

export function generateCodeAlongPrompt() {
  return generateFTCCodeAlongPromptData();
}

export function getFTCCodeAlongPromptById(promptId) {
  const prompt = promptsList.find((item) => item.id === promptId);
  return prompt ? prompt.element : null;
}

export function getFTCCodeAlongAnswer(promptId) {
  const prompt = promptsList.find((item) => item.id === promptId);
  return buildAnswerElement(prompt);
}

export { promptsList };
