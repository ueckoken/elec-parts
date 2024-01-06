({
	R:{
		h:{ja:'抵抗',en:'Resistor'},
		F:{
			h:'Fixed',
			CF:{
				h:{ja:'炭素皮膜',en:'Carbon Film'},
				THT:1,
				SMD:1
			},
			MF:{h:{ja:'金属皮膜',en:'Metal Film'}}
		},
		V:{
			h:{ja:'可変',en:'Variable'},
			THT:1,
			CDS:{h:{ja:'CDSセル',en:'CDS Cell'}}
		}
	},
	C:{
		h:{ja:'コンデンサ',en:'Capacitor'},
		MLC:{
			h:{ja:'積層セラミック',en:'Multi Layer Ceramic'},
			THT:1,
			SMD:1
		},
		AE:{
			h:{ja:'アルミ電解',en:'Aluminum Electrolytic'},
			THT:['Rubycon PX 100u 16V 105C','Rubycon WXA 470u 16V 105C']
		},
		EDL:{h:{ja:'電気二重層',en:'Electric Double Layer'}}
	},
	L:{h:{ja:'インダクタ',en:'Inductor'}},

	D:{
		h:{ja:'ダイオード',en:'Diode'},
		R:{
			h:{ja:'整流',en:'Rectifier'},
			THT:['1N4007']
		},
		SS:{
			h:{ja:'小信号',en:'Small Signal'},
			THT:['1N4148']
		},
		Z:{
			h:{ja:'定電圧',en:'Zenner'},
			THT:1
		}
	},
	LED:{
			h:{ja:'発光ダイオード',en:'Light Emitting Diode'},
			THT:1,
			SMD:['OSXX1608C1A'],
			DIG:{
				h:{ja:'7セグメント',en:'Digit'},
				THT:1
			},
			MUX:{
				h:{ja:'マトリクス',en:'Matrix'},
				THT:1
			},
			RGB:{
				h:{ja:'フルカラー',en:'Full Color'},
				THT:1,
				IC:{
					h:{jp:'IC内蔵',en:'IC'},
					SMD:['WS2812']
				}
			}
		},
	Tr:{
		h:{ja:'トランジスタ',en:'Transistor'},
		BP:{
			h:{jp:'バイポーラ',en:'Bipolar'},
			NPN:{h:{jp:'NPN',en:'NPN'}},
			PNP:{h:{jp:'PNP',en:'PNP'}}
		},
		FE:{
			h:{jp:'電界効果',en:'Field Effect'},
			Nch:{h:{jp:'Nチャネル',en:'N Channel'}},
			Pch:{h:{jp:'Pチャネル',en:'P Channel'}}
		},
		P:{
			h:{jp:'フォト',en:'Photo'},
			C:{h:{jp:'カプラ',en:'Coupler'}}
		}
	},
	IC:{
		h:{jp:'集積回路',en:'Inteligent Circuit'},
		A:{
			h:{jp:'アナログ',en:'Analog'},
			OPA:{
				h:{jp:'オペアンプ',en:'OP-AMP'},
				THT:['NJM4580']
			},
			REG:{
				h:{jp:'レギュレータ',en:'Regulator'},
				THT:['LM1117'],
				SMD:1
			},
			TIM:{
				h:{jp:'タイマー',en:'Timer'},
				THT:['NE555']
			}
		},
		D:{
			LOG:{
				h:{jp:'論理回路',en:'Logical'},
				THT:['74HC595']
			},
			IF:{
				h:{jp:'インターフェイス',en:'Interface'},
				DAC:{h:{jp:'DAC',en:'DAC'}},
				ADC:{h:{jp:'ADC',en:'ADC'}},
				UART:{h:{jp:'シリアル',en:'UART'}}
			},
			MCU:{
				h:{jp:'マイコン',en:'Micro Controller Unit'},
				AVR:{
					h:{jp:'AVR',en:'AVR'},
					THT:['ATmega 328P','ATmega 88','ATtiny2313']
				},
				PIC:{
					h:{jp:'PIC',en:'PIC'},
					THT:['PIC12F675']
				},
				STM:{h:{jp:'STM',en:'STM'}},
				CH32V:{h:{jp:'CH32V',en:'CH32V'}},
				ESP32:{h:{jp:'ESP32',en:'ESP32'}},
				DEV:{
					h:{jp:'開発ボード',en:'Development Board'},
					ARDUINO:{
						h:{jp:'Arduino',en:'Arduino'},
						THT:['Arduino UNO Rev3','Arduino Mega']
					},
					ESP32:{
						h:{jp:'ESP32',en:'ESP32'},
						THT:['ESP32-DevKit-C','M5Stack']
					},
					ARM:{
						h:{jp:'ARM',en:'ARM'},
						THT:['Raspberry Pi Pico','micro:bit']
					}
				}
			}
		}
	},
	XTAL:{
		Q:{h:{jp:'水晶振動子',en:'Crystal Unit'}},
		C:{h:{jp:'セラミック発振子',en:'Ceramic Resonator'}},
		O:{h:{jp:'発振器',en:'Oscillator'}}
	},
	SW:{
		h:{jp:'スイッチ',en:'Switch'},
		SLD:{
			h:{jp:'スライド',en:'Slide'},
			THT:1
		},
		TGL:{
			h:{jp:'トグル',en:'Toggle'},
			THT:1
		},
		TCT:{
			h:{jp:'タクト',en:'Tactile'},
			THT:1,
			SMD:1
		}
	},
	CN:{
		h:{jp:'コネクタ',en:'Connector'},
		THT:1,
		XH:{h:{jp:'XH',en:'XH'}},
		PH:{h:{jp:'PH',en:'PH'}},
		VH:{h:{jp:'VH',en:'VH'}},
		QI:{h:{jp:'QI',en:'QI'}}
	},
	M:{
		h:{jp:'モータ',en:'Motor'},
		DC:{
			h:{jp:'直流',en:'DC'},
			THT:1,
			BL:{h:{jp:'ブラシレス',en:'Brushless'}}
		}
	}
});
