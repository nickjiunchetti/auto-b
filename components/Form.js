import { Form, Select, InputNumber, Switch, Slider, Button, Radio, DatePicker, Space, Tabs, Input} from 'antd'

const { TabPane } = Tabs;

function callback(key) {
	console.log(key);
}

const radioStyle = {
	display: 'block',
	height: '30px',
	lineHeight: '30px',
};

export default function dataForm() {
	const FormItem = Form.Item
	const Option = Select.Option

	return (

			<Form layout="horizontal">

			<Tabs onChange={callback} type="card">
				<TabPane tab="Geral" key="1">

					<FormItem label="Campus" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
						<Radio.Group defaultValue="a">
							<Radio.Button value="a">Itajubá</Radio.Button>
							<Radio.Button value="b">Itabira</Radio.Button>
						</Radio.Group>
					</FormItem>


					<FormItem label="Posto Remoto" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
						<Select size="large" defaultValue="a" style={{ width: 192 }} name="select">
							<Option value="a">IRN</Option>
							<Option value="b">IMC</Option>
							<Option value="c">resto</Option>
						</Select>
					</FormItem>

					<FormItem label="Servidor Responsável" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
						<Select size="large" defaultValue="a" style={{ width: 192 }} name="select">
							<Option value="a">Servidor 1</Option>
							<Option value="b">Servidor 2</Option>
							<Option value="c">resto</Option>
						</Select>
					</FormItem>

					<FormItem label="Emissão do Edital" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
					</FormItem>

					<FormItem label="Numero da Carta Convite" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
						<InputNumber
							size="large"
							min={1}
							max={100}
							style={{ width: 100 }}
							defaultValue={3}
							name="inputNumber"
						/>
					</FormItem>

					<FormItem label="Emissão da Carta Convite" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
					</FormItem>

					<FormItem label="Destinação da Carta Convite" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
						<Radio.Group defaultValue="b">
							<Radio.Button value="a">Interna</Radio.Button>
							<Radio.Button value="b">Externa</Radio.Button>
						</Radio.Group>
					</FormItem>

					<FormItem label="Numero da Ata" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
						<InputNumber
							size="large"
							min={1}
							max={100}
							style={{ width: 100 }}
							defaultValue={3}
							name="inputNumber"
						/>
					</FormItem>

				</TabPane>
				<TabPane tab="Banca" key="2">

					<FormItem label="Tipo de Banca" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>

						<Radio.Group defaultValue="a">
							<Radio style={radioStyle} value="a">
								Mestrado
							</Radio>
							<Radio style={radioStyle} value="b">
								Doutorado
							</Radio>
							<Radio style={radioStyle} value="c">
								Qualificação Mestrado
							</Radio>
							<Radio style={radioStyle} value="d">
								Qualificação Doutorado
							</Radio>
						</Radio.Group>
					</FormItem>


					<FormItem label="Programa de Pós-Graduação" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
						<Select size="large" defaultValue="a" style={{ width: 192 }} name="select">
							<Option value="a">Programa1</Option>
							<Option value="b">Programa2</Option>
							<Option value="c">Programa3</Option>
						</Select>
					</FormItem>

					<FormItem label="Área de Concentração" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
						<Select size="large" defaultValue="a" style={{ width: 192 }} name="select">
							<Option value="a">Servidor 1</Option>
							<Option value="b">Servidor 2</Option>
							<Option value="c">resto</Option>
						</Select>
					</FormItem>

					<FormItem label="Data da Banca" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
					</FormItem>

					<FormItem label="Numero da Carta Convite" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
						<InputNumber
							size="large"
							min={1}
							max={100}
							style={{ width: 100 }}
							defaultValue={3}
							name="inputNumber"
						/>
					</FormItem>

					<FormItem label="Horário Inicial" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
					</FormItem>

					<FormItem label="Horário Final (Extenso)" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
						<Input placeholder="Horário Final por Extenso" />
					</FormItem>

					<FormItem label="Local" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
						<Input placeholder="Local da Banca" />
					</FormItem>

					<FormItem label="Título da Banca" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
						<Input placeholder="Título da Banca" />
					</FormItem>

				</TabPane>
				<TabPane tab="Discente" key="3">

					<FormItem label="Nome" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
						<Input placeholder="Nome do Discente"/>
					</FormItem>

					<FormItem label="Matrícula" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
						<InputNumber
							size="large"
							min={1}
							max={100}
							style={{ width: 100 }}
							defaultValue={3}
							name="inputNumber"
						/>
					</FormItem>

				</TabPane>
				<TabPane tab="Comissão" key="4">
					<Tabs tabPosition="left">
						<TabPane tab="Examinador 1" key="1">

							<FormItem label="Nome" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
								<Input placeholder="Nome do Examinador"/>
							</FormItem>
							<FormItem label="Instituição/Vínculo" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
								<Input placeholder="Instituição/Vínculo do Examinador"/>
							</FormItem>
							<FormItem label="A Distância" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
								<Switch defaultChecked/>
							</FormItem>
							<FormItem label="Tipo de Examinador" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
								<Radio.Group defaultValue="a">
									<Radio style={radioStyle} value="a">
										Comum
									</Radio>
									<Radio style={radioStyle} value="b">
										Coorientador
									</Radio>
									<Radio style={radioStyle} value="c">
										Orientador
									</Radio>
								</Radio.Group>
							</FormItem>

						</TabPane>
						<TabPane tab="Examinador 2" key="2">
							<FormItem label="Nome" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
								<Input placeholder="Nome do Examinador"/>
							</FormItem>
							<FormItem label="Instituição/Vínculo" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
								<Input placeholder="Instituição/Vínculo do Examinador"/>
							</FormItem>
							<FormItem label="A Distância" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
								<Switch defaultChecked/>
							</FormItem>
							<FormItem label="Tipo de Examinador" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
								<Radio.Group defaultValue="a">
									<Radio style={radioStyle} value="a">
										Comum
									</Radio>
									<Radio style={radioStyle} value="b">
										Coorientador
									</Radio>
									<Radio style={radioStyle} value="c">
										Orientador
									</Radio>
								</Radio.Group>
							</FormItem>
						</TabPane>
						<TabPane tab="Examinador 3" key="3">
							<FormItem label="Nome" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
								<Input placeholder="Nome do Examinador"/>
							</FormItem>
							<FormItem label="Instituição/Vínculo" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
								<Input placeholder="Instituição/Vínculo do Examinador"/>
							</FormItem>
							<FormItem label="A Distância" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
								<Switch defaultChecked/>
							</FormItem>
							<FormItem label="Tipo de Examinador" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
								<Radio.Group defaultValue="a">
									<Radio style={radioStyle} value="a">
										Comum
									</Radio>
									<Radio style={radioStyle} value="b">
										Coorientador
									</Radio>
									<Radio style={radioStyle} value="c">
										Orientador
									</Radio>
								</Radio.Group>
							</FormItem>
						</TabPane>
						<TabPane tab="Examinador 4" key="4">
							<FormItem label="Nome" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
								<Input placeholder="Nome do Examinador"/>
							</FormItem>
							<FormItem label="Instituição/Vínculo" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
								<Input placeholder="Instituição/Vínculo do Examinador"/>
							</FormItem>
							<FormItem label="A Distância" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
								<Switch defaultChecked/>
							</FormItem>
							<FormItem label="Tipo de Examinador" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
								<Radio.Group defaultValue="a">
									<Radio style={radioStyle} value="a">
										Comum
									</Radio>
									<Radio style={radioStyle} value="b">
										Coorientador
									</Radio>
									<Radio style={radioStyle} value="c">
										Orientador
									</Radio>
								</Radio.Group>
							</FormItem>
						</TabPane>
						<TabPane tab="Examinador 5" key="5">
							<FormItem label="Nome" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
								<Input placeholder="Nome do Examinador"/>
							</FormItem>
							<FormItem label="Instituição/Vínculo" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
								<Input placeholder="Instituição/Vínculo do Examinador"/>
							</FormItem>
							<FormItem label="A Distância" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
								<Switch defaultChecked/>
							</FormItem>
							<FormItem label="Tipo de Examinador" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
								<Radio.Group defaultValue="a">
									<Radio style={radioStyle} value="a">
										Comum
									</Radio>
									<Radio style={radioStyle} value="b">
										Coorientador
									</Radio>
									<Radio style={radioStyle} value="c">
										Orientador
									</Radio>
								</Radio.Group>
							</FormItem>
						</TabPane>
						<TabPane tab="Examinador 6" key="6">
							<FormItem label="Nome" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
								<Input placeholder="Nome do Examinador"/>
							</FormItem>
							<FormItem label="Instituição/Vínculo" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
								<Input placeholder="Instituição/Vínculo do Examinador"/>
							</FormItem>
							<FormItem label="A Distância" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
								<Switch defaultChecked/>
							</FormItem>
							<FormItem label="Tipo de Examinador" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
								<Radio.Group defaultValue="a">
									<Radio style={radioStyle} value="a">
										Comum
									</Radio>
									<Radio style={radioStyle} value="b">
										Coorientador
									</Radio>
									<Radio style={radioStyle} value="c">
										Orientador
									</Radio>
								</Radio.Group>
							</FormItem>
						</TabPane>
						<TabPane tab="Examinador 7" key="7">
							<FormItem label="Nome" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
								<Input placeholder="Nome do Examinador"/>
							</FormItem>
							<FormItem label="Instituição/Vínculo" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
								<Input placeholder="Instituição/Vínculo do Examinador"/>
							</FormItem>
							<FormItem label="A Distância" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
								<Switch defaultChecked/>
							</FormItem>
							<FormItem label="Tipo de Examinador" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
								<Radio.Group defaultValue="a">
									<Radio style={radioStyle} value="a">
										Comum
									</Radio>
									<Radio style={radioStyle} value="b">
										Coorientador
									</Radio>
									<Radio style={radioStyle} value="c">
										Orientador
									</Radio>
								</Radio.Group>
							</FormItem>
						</TabPane>
						<TabPane tab="Examinador 8" key="8">
							<FormItem label="Nome" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
								<Input placeholder="Nome do Examinador"/>
							</FormItem>
							<FormItem label="Instituição/Vínculo" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
								<Input placeholder="Instituição/Vínculo do Examinador"/>
							</FormItem>
							<FormItem label="A Distância" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
								<Switch defaultChecked/>
							</FormItem>
							<FormItem label="Tipo de Examinador" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
								<Radio.Group defaultValue="a">
									<Radio style={radioStyle} value="a">
										Comum
									</Radio>
									<Radio style={radioStyle} value="b">
										Coorientador
									</Radio>
									<Radio style={radioStyle} value="c">
										Orientador
									</Radio>
								</Radio.Group>
							</FormItem>
						</TabPane>
					</Tabs>

				</TabPane>
				<TabPane tab="Documentos" key="5">
					Gerar documentos
				</TabPane>
			</Tabs>
			<FormItem style={{ marginTop: 48 }} wrapperCol={{ span: 8, offset: 8 }}>
				<Button size="large" type="primary" htmlType="submit">Enviar</Button>
				<Button size="large" style={{ marginLeft: 8 }}>Cancelar</Button>
			</FormItem>
			</Form>
	)
}
